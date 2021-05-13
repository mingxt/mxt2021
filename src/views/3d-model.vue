<template>
  <div class="command-center">
    <my-header>
      <button slot="btn" class="btn" @click="$router.go(-1)">< 返回</button>
    </my-header>
    <div class="container-wrapper">
      <div class="container-content">
        三维模型=======================
        <Map :url="configUrl" @onload="initMap" />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/my-header'
import DatePickerSelect from '@/components/date-picker-select'
import Map from '@/components/mars3d/Map.vue'

export default {
  components: {
    MyHeader,
    DatePickerSelect,
    Map
  },
  data () {
    return {
      configUrl: 'config/config.json'
    }
  },
  mounted () {
  },
  methods: {
    initMap (map) {
      // 创建entity图层
      const graphicLayer = new this.mars3d.layer.GraphicLayer()
      map.addLayer(graphicLayer)
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
  }

</style>
