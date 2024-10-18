const userID = "738748102311280681"; // Thay đổi thành ID Discord của bạn

const elements = {
	statusBox: document.getElementById("status"),
	statusImage: document.getElementById("status-image"),
	avatarImage: document.getElementById("avatar-image"),
	avaterDecoration: document.getElementById("avatar-decoration"),
	bannerImage: document.getElementById("banner-image"),
	bannerColor: document.querySelector(".banner"),
	displayName: document.querySelector(".display-name"),
	username: document.querySelector(".username"),
	badges: document.querySelector(".badges-left"),
	customStatus: document.querySelector(".custom-status"),
	customStatusText: document.querySelector(".custom-status-text"),
	customStatusEmoji: document.getElementById("custom-status-emoji"),
};

// Kết nối WebSocket với Lanyard API
function startWebSocket() {
	const ws = new WebSocket("wss://api.lanyard.rest/socket");

	ws.onopen = () => {
		ws.send(
			JSON.stringify({
				op: 2, // Subscribe operation
				d: {
					subscribe_to_id: userID,
				},
			})
		);
	};

	ws.onmessage = (event) => {
		const { t, d } = JSON.parse(event.data);
		if (t === "INIT_STATE" || t === "PRESENCE_UPDATE") {
			updateStatus(d);
		}
	};

	ws.onerror = (error) => {
		console.error("Lỗi WebSocket:", error);
		ws.close();
	};

	ws.onclose = () => {
		console.log("WebSocket đóng, thử kết nối lại...");
		setTimeout(startWebSocket, 1000); // Tự động kết nối lại sau 1 giây
	};
}

function updateStatus(lanyardData) {
	const { discord_status, activities, discord_user } = lanyardData;

	elements.displayName.innerHTML = discord_user.display_name;
	elements.username.innerHTML = discord_user.username;

	let imagePath;
	switch (discord_status) {
		case "online":
			imagePath = "./public/status/online.svg";
			break;
		case "idle":
			imagePath = "./public/status/idle.svg";
			break;
		case "dnd":
			imagePath = "./public/status/dnd.svg";
			break;
		case "offline":
			imagePath = "./public/status/offline.svg";
			break;
		default:
			imagePath = "./public/status/offline.svg";
			break;
	}

	// Kiểm tra hoạt động streaming
	if (
		activities.some(
			(activity) =>
				activity.type === 1 &&
				(activity.url.includes("twitch.tv") ||
					activity.url.includes("youtube.com"))
		)
	) {
		imagePath = "./public/status/streaming.svg";
	}

	elements.statusImage.src = imagePath;
	elements.statusImage.alt = `Discord status: ${discord_status}`;

	// Cập nhật custom status
	if (activities[0]?.state) {
		elements.customStatusText.innerHTML = activities[0].state;
	} else {
		elements.customStatusText.innerHTML = "Not doing anything!";
	}

	if (activities[0]?.emoji) {
		elements.customStatusEmoji.src = `https://cdn.discordapp.com/emojis/${activities[0].emoji.id}?format=webp&size=24&quality=lossless`;
		elements.customStatusEmoji.style.display = "inline-block";
		elements.customStatusEmoji.style.marginRight = "5px";
	} else {
		elements.customStatusEmoji.style.display = "none";
	}

	// Hiển thị hoặc ẩn custom status
	if (!activities[0]?.state && !activities[0]?.emoji) {
		elements.customStatus.style.display = "none";
	} else {
		elements.customStatus.style.display = "flex";
	}
}

// Bắt đầu WebSocket
startWebSocket();
