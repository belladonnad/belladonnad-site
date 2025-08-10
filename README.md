# belladonnad — songwriter site

## quick start
1. install node 18+
2. in this folder run:
   ```bash
   npm install
   npm run dev
   ```
3. open http://localhost:5173

## deploy to vercel
- create a new project on vercel and upload this folder (or push to github and import)
- in vercel project settings → domains → add `belladonnad.com`
- follow dns instructions in your godaddy dashboard

## customize
- edit `src/App.jsx` to update email, links, and copy
- replace `links.epkPdf` and `links.pressPhotosZip` with your assets
- set `links.playlistEmbed` to any spotify playlist/album embed url