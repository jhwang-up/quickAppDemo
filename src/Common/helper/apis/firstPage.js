/** @format */

import $ajax from '../ajax'
import $utils from '../utils'

export default {
  getImgList() {
    return $ajax.get($utils.composeApiPath('users/getImgList'))
  },
  // getRandomPoetry(data) {
  //   return $ajax.get($utils.composeApiPath('getRandomPoetry'), data)
  // },
  // getMorePoetry(data) {
  //   return $ajax.get($utils.composeApiPath('getMorePoetry'), data)
  // },
  // getPoetryById(data) {
  //   return $ajax.get($utils.composeApiPath('getPoetryById'), data)
  // }
}
