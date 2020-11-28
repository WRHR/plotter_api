const express = require('express');
const cors = require('cors');
const main = () => {
    const app = express();
    app.listen(4000, () => {
        console.log('Server running on port 4000');
    });
};
main();
//# sourceMappingURL=index.js.map