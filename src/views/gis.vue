<template>
  <div class="command-center">
    <my-header>
      <button slot="btn" class="btn" @click="$router.go(-1)">< 返回</button>
    </my-header>
    <div class="container-wrapper">
      <div class="container-content">
        gis============gis===========
        <div class="mapContainer" id="mapContainer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/my-header'
import DatePickerSelect from '@/components/date-picker-select'
import {createMap, createTileLayer} from '../../utils/map'

export default {
  components: {
    MyHeader,
    DatePickerSelect
  },
  data () {
    return {
      map: null,
      CommonUrl: window.CommonUrl,
      SatelliteUrl: window.SatelliteUrl,
      polyLines: [],
      path: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let _this = this
      _this.map = createMap('mapContainer', {attributionControl: false})
      // // 加载卫星地图图层
      // var SatelliteLayer = L.tileLayer(_this.SatelliteUrl, {
      //   maxZoom: 18,
      //   minZoom: 3
      // })
      // // 加载普通地图图层
      // var CommonLayer = L.tileLayer(_this.CommonUrl, {
      //   maxZoom: 18,
      //   minZoom: 3
      // })
      // L.layerGroup([SatelliteLayer, CommonLayer]).addTo(_this.map)

      // 加载 open street map 图层服务
      createTileLayer(_this.map, _this.CommonUrl, {
        maxZoom: 16,
        minZoom: 5
      })
      // 设置地图中心位置
      _this.map.setView([31.77611, 117.276828], 12)
    }
  }
}
</script>

<style lang="scss" scoped>
  .command-center {
    height: 100vh;
    background: url("../../assets/img/bj1.jpg") no-repeat center center;
    background-size: 100% 100%;
  }

  .btn {
    width: 70px;
    padding: 4px 8px;
    color: #00e4ff;
    background-color: transparent;
    border-color: #00e4ff;
  }

  .container-wrapper {
    box-sizing: border-box;
    margin-top: 20px;
    padding: 0 15px 20px;
    height: calc(100% - 60px - 20px);
  }

  .container-content {
    position: relative;
    height: 100%;
    .mapContainer {
      width: 100%;
      height: 100%;
    }
  }

</style>
