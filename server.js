require('rootpath')();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require('_middleware/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true) }));

// api routes
app.use('/accounts', require('./routes/account.route'));
app.use('/skills', require('./routes/skill.route'));
app.use('/members', require('./routes/teamMember.route'));
app.use('/profiles', require('./routes/empProfile.route'));
app.use('/requisitions', require('./routes/requisition.route'));
app.use('/create_team', require('./routes/team.route'));
app.use('/employee', require('./routes/empProfile.route'));
// swagger docs route
app.use('/api-docs', require('_helpers/swagger'));

// global error handler
app.use(errorHandler);

// start server
const port =
  process.env.NODE_ENV === 'production' ? process.env.PORT || 80 : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));
