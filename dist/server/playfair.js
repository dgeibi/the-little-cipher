'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _playfair = require('../cipher/playfair');

var _util = require('../util');

const getResults = (secret, plaintext) => {
  const { diff, square } = (0, _playfair.playfair)(secret, plaintext);

  const cipherText = (0, _playfair.cipherString)(diff);
  const plainText = (0, _playfair.originalString)(diff);

  return {
    diff,
    square,
    cipherText,
    plainText
  };
};

const playfairMiddleware = (req, res) => {
  if (req.file && (0, _util.isPlainFile)(req.file)) {
    (0, _fs.readFile)(req.file.path, (err, buffer) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.status(200).json(getResults(req.body.secret, buffer.toString()));
    });
  } else if (req.body.plaintext) {
    res.status(200).json(getResults(req.body.secret, req.body.plaintext));
  } else {
    res.sendStatus(400);
  }
};

exports.default = playfairMiddleware;
//# sourceMappingURL=playfair.js.map