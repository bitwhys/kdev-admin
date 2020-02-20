<template>
  <div class="resume-container">
    <el-row>
      <pan-thumb :image="image"/>

      <el-button type="primary" icon="upload" style="position: absolute;bottom: 15px;margin-left: 40px;" @click="imagecropperShow=true">Change Avatar
      </el-button>
    </el-row>

    <el-row>
      <label class="radio-label" style="padding-left:0;">First Name : </label>
      <el-input
        v-model="firstName"
        placeholder="First Name"
        style="width:340px;"
        prefix-icon="el-icon-user"/>
    </el-row>

    <el-row>
      <label class="radio-label" style="padding-left:0;">Last Name : </label>
      <el-input
        v-model="firstName"
        placeholder="Last Name"
        style="width:340px;"
        prefix-icon="el-icon-user"/>
    </el-row>

    <el-row>
      <label class="radio-label" style="padding-left:0;">Title : </label>
      <el-input
        v-model="firstName"
        placeholder="Full Stack Developer"
        style="width:340px;"
        prefix-icon="el-icon-user"/>
    </el-row>

    <image-cropper
      v-show="imagecropperShow"
      :width="300"
      :height="300"
      :key="imagecropperKey"
      url="https://httpbin.org/post"
      lang-type="en"
      @close="close"
      @crop-upload-success="cropSuccess"/>
  </div>
</template>

<script>
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'

export default {
  name: 'Overview',
  components: { ImageCropper, PanThumb },
  data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'
    }
  },
  methods: {
    cropSuccess(resData) {
      this.imagecropperShow = false
      this.imagecropperKey = this.imagecropperKey + 1
      this.image = resData.files.avatar
    },
    close() {
      this.imagecropperShow = false
    }
  }
}
</script>

<style scoped>
  .resume-container {

  }
  .avatar{
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
</style>
