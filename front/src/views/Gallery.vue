<template>
  
    <div class="container" style="width:90%">
      <div style="margin: 20px">
        
        <h4>Галлерея</h4>
      </div>

      <upload-files></upload-files>
    </div>
  
</template>

<script>
import UploadFiles from "../components/Upload.vue";

export default {
  name: "Gallery",
  components: {
    UploadFiles
  }
};
</script>
