// Save Typeface Handler
// - User action (click on save button)
// - Expected behaviour 9Data gets sent to the database and is saved)

// const params = {
//     setting_id: +dbData.settingId,
//     background_colour: dbData.backgroundColour,
//     typeface: dbData.typeface,
//     font_size: dbData.font_size,
//     letter_spacing: dbData.letter_spacing
// }
import axios from 'axios';

export default function saveTypeface(bgColour, typeFace, fontSize, lineSpacing, letterSpacing) {
// component where data comes from should always be 100% valid
    const updateSettingObj = {backgroundColour: bgColour, typeface: typeFace, font_size: fontSize, line_spacing: lineSpacing, letter_spacing: letterSpacing}

  axios.post(`${process.env.HERMES_PATH}/api/db/updateSettings`, updateSettingObj)
    .then((res) => {return res})
    .catch((err) => console.error(err))
}