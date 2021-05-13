import 'leaflet/dist/leaflet.css'
import $L from 'leaflet'

export const L = $L

export const createMap = (divId, options) => {
  let map = $L.map(divId, options)
  return map
}

export const createTileLayer = async (map, url, options) => {
  let tileLayer = await $L.tileLayer(url, options)
  tileLayer.addTo(map)
  return tileLayer
}
