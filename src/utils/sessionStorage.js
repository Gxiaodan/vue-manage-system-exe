export function getSession(key){
  if(!window.sessionStorage){
    return 
  }
  return JSON.parse(window.sessionStorage.getItem(key))
}
/*set存储key：value键值对*/
export function setSession(key,value){
  if(!window.sessionStorage){
    return 
  }
  window.sessionStorage.setItem(key,JSON.stringify(value))
}
/*remove删除key 和值 value*/
export function removeSession(key){
  if(!window.sessionStorage){
    return
  }
  window.sessionStorage.removeItem(key) 
}