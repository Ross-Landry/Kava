import firebase from 'firebase';

import {
    MENU_FETCH_SUCCESS,
    STOCK_FETCH_SUCCESS,
    SELECT_STOCK_MENU,
    SELECT_STOCK_ITEM,
    FETCH_IMAGE_URL,
    IMAGE_OUTDATED
} from './types';

export const menuFetch = (locationUID) => {
  return (dispatch) => {
    firebase.database().ref(`locations/${locationUID}/menu`)
      .on('value', snapshot => {
          dispatch({ type:MENU_FETCH_SUCCESS, payload:snapshot.val() });
      });
  };
};

export const stockFetch = (menuType) => {
  return (dispatch) => {
    firebase.database().ref(`menus/${menuType}`)
      .on('value', snapshot => {
          dispatch({ type:STOCK_FETCH_SUCCESS, payload:snapshot.val() });
      });
  };
};

export const selectStockMenu = (menuType) => {
  return { 
    type:SELECT_STOCK_MENU, 
    payload:menuType 
  };
};

export const selectStockItem = (item) => {
  return { 
    type:SELECT_STOCK_ITEM, 
    payload:item
  };
};

export const imageOutdated = () => {
  return { 
    type:IMAGE_OUTDATED
  };
};

export function fetchImage(picturePath){
    
  const storageRef = firebase.storage();
  var pbjRef = storageRef.ref(picturePath);
  
  // Get the download URL
  return (dispatch) => {

          pbjRef.getDownloadURL().then(function(url) {
                dispatch({ type:FETCH_IMAGE_URL, payload:url });
          }).catch(function(error) {
            switch (error.code) {
              case 'storage/object_not_found':
                // File doesn't exist
                console.log(' File doesnt exist');
                break;

              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                console.log(' user doesnt have permission');
                break;

              case 'storage/canceled':
                // User canceled the upload
                console.log('user cancelled');
                break;

              case 'storage/unknown':
                // Unknown error occurred, inspect the server response
                console.log('unknown error');
                break;
            }
          });
    };
};