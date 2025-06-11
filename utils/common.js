/**
 * @author PRASHANTH MERUGU
 */
import React, { Component, } from 'react';
import {
  StyleSheet,
  Platform,
  PixelRatio,
  Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');

var dbProps={
  	  'dbName' : 'survey_latest',
      'deviceDBName' : 'survey_device',
      'dbUrl' :  'http://ec2-54-254-188-73.ap-southeast-1.compute.amazonaws.com:5984/',
      'adminDBUrl' : 'http://surveyAdmin:admin123@ec2-54-254-188-73.ap-southeast-1.compute.amazonaws.com:5984/'
};
exports.dbProps=dbProps;


var dbUrl = 'http://54.255.219.38:5984/';
var adminDBUrl = 'http://admin:c$@dm1n@54.255.219.38:5984/';

var remoteDBUrl = dbUrl+dbProps.dbName;
var remoteDBAdminUrl = adminDBUrl+dbProps.dbName;
var remoteDBUrl = dbUrl+dbProps.dbName;
var remoteDBAdminUrl = adminDBUrl+dbProps.dbName;

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}
exports.uuid=uuid;
function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
exports.guid=guid;
