const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 3000;
console.log("ʕノ•ᴥ•ʔノ ︵ ┻━┻")
app.listen(3000);

