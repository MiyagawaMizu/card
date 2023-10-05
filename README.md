# 🌐 Discord Profile Card
<img src="https://raw.githubusercontent.com/MiyagawaMizu/card/main/preview.png" alt="Preview of Discord-Status" width="100%" height="100%">

## 📝 Features

### Realtime update info from Discord
- [x] Show Discord Status
- [x] Show Discord Username
- [x] Show Discord Discriminator
- [x] Show Discord Avatar
- [x] Show Discord Banner
- [ ] Show Discord Badges
- [ ] Show Discord Bio
- [x] Responsive for mobile

### Preview

<img src="https://raw.githubusercontent.com/MiyagawaMizu/Discord-Status/main/status/online.svg" width="17"></img> - **Online**
<br>
<img src="https://raw.githubusercontent.com/MiyagawaMizu/Discord-Status/main//status/idle.svg" width="17"></img> - **Idle / AFK**
<br>
<img src="https://raw.githubusercontent.com/MiyagawaMizu/Discord-Status/main/status/dnd.svg" width="17"></img> - **Do not disturb**
<br>
<img src="https://raw.githubusercontent.com/MiyagawaMizu/Discord-Status/main/status/streaming.svg" width="17"></img> - **Streaming**
<br>
<img src="https://raw.githubusercontent.com/MiyagawaMizu/Discord-Status/main/status/offline.svg" width="17"></img> - **Offline / Insivible**

<img src="https://github.com/MiyagawaMizu/Discord-Status/raw/main/preview.gif" alt="Preview of Discord-Status" width="100%" height="100%">

## Stuff I used to make this
 - Source code of this website is form [Domin-MND](https://github.com/Domin-MND/profile-card/tree/classic) (I just edit it).
 - To make realtime Discord Status, I used [Landyard API](https://github.com/Phineas/lanyard) by [Phineas](https://github.com/Phineas).
 - For realtime banner update, I used [Mesavirep's Discord API](https://mesavirep.xyz/).
  
## ⚙️ How to use
1. Fork this repository
2. Edit `index.html` and `style.css` to your liking
3. Go to your repository settings and enable GitHub Pages
4. Change Discord User ID to your own in `script.js` (line 1)
```js
const userID = "<discord user id>";
```

> **Note**
> This project is using [Landyard API](https://github.com/Phineas/lanyard) to get user data. So you need to join [this server](https://github.com/Phineas/lanyard), then the bot can read your status and information to display them realtime on the website.
