const fs = require('fs');
const path = require('path');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const saveFile = async (rootFolder, file) => {
    try {
        const folderPath = path.join(__dirname, '../../uploads', rootFolder.toString());

        if (!fs.existsSync(rootFolder)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        const filePath = path.join(folderPath, file.originalname);
        fs.writeFileSync(filePath, file.buffer);

        return path.relative('uploads', filePath);
    } catch (err) {
        throw new Error(`failed to save file: ${err.message}`);
    }
};

module.exports = { upload, saveFile };