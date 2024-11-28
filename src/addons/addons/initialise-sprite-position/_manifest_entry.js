/* generated by pull.js */
const manifest = {
  "editorOnly": true,
  "noTranslations": true,
  "name": "Customizable new sprite position",
  "description": "Change the default x/y position of new sprites.",
  "credits": [
    {
      "name": "pufferfish101007",
      "link": "https://scratch.mit.edu/users/pufferfish101007"
    }
  ],
  "userscripts": [
    {
      "url": "userscript.js"
    }
  ],
  "settings": [
    {
      "dynamic": true,
      "id": "x",
      "name": "X position",
      "type": "integer",
      "default": 0,
      "min": -240,
      "max": 240
    },
    {
      "dynamic": true,
      "id": "y",
      "name": "Y position",
      "type": "integer",
      "default": 0,
      "min": -180,
      "max": 180
    },
    {
      "dynamic": true,
      "id": "library",
      "name": "Randomize the position of library sprites",
      "type": "boolean",
      "default": false
    }
  ],
  "tags": [],
  "enabledByDefault": true
};
export default manifest;