/**
 * TagAll Command
 * ❌ Bot admin দরকার নাই
 * ❌ User admin দরকার নাই
 * ✅ শুধু mention করবে
 */

async function tagAllCommand(sock, chatId, senderId, message) {
  try {
    const groupMetadata = await sock.groupMetadata(chatId);
    const members = groupMetadata.participants;

    const emojis = [
      "│🌸 ᩧ𝆺ྀི𝅥","│👑 ᩧ𝆺ྀི𝅥","│🎀 ᩧ𝆺ྀི𝅥",
      "│🦋 ᩧ𝆺ྀི𝅥","│💎 ᩧ𝆺ྀི𝅥","│🎾 ᩧ𝆺ྀི𝅥",
      "│🎈 ᩧ𝆺ྀི𝅥","│🧁 ᩧ𝆺ྀི𝅥","│🍿 ᩧ𝆺ྀི𝅥","│🪀 ᩧ𝆺ྀི𝅥"
    ];

    // 👉 custom attention text
    const userText =
      message?.conversation ||
      message?.extendedTextMessage?.text ||
      '💗 ATTENTION EVERYONE 💗';

    let text = `
🪀 🇬‌𝐑𝐎𝐔𝐏 : ${groupMetadata.subject}
🪀 🇲‌𝐄𝐌𝐁𝐄𝐑𝐒 : ${members.length}
🪀 🇲‌𝐄𝐒𝐒𝐀𝐆𝐄 : ${userText}

╭┈─「 ɦเ αℓℓ ƒɾเεɳ∂ร 🥰 」┈❍
`;

    let count = 0;
    for (const m of members) {
      const emoji = emojis[count % emojis.length];
      text += `${emoji} @${m.id.split('@')[0]}\n`;
      count++;
    }

    text += `╰────────────❍

💬 Sent with Love by 𓆩Xtylish-Shahin𓆪 🖤
💗 Stay Active — Stay Stylish! ✨
`;

    await sock.sendMessage(
      chatId,
      {
        text,
        mentions: members.map(m => m.id)
      },
      { quoted: message }
    );

  } catch (err) {
    console.error("❌ TagAll Error:", err);
    await sock.sendMessage(chatId, {
      text: "⚠ TagAll কাজ করে নাই ভাই 😅"
    });
  }
}

module.exports = tagAllCommand;
