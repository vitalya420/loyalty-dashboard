<template>
  <div class="image-select">
    <div class="image-select-form">
      <label for="file" class="label">
        <div class="fake-button"><i class="bi bi-cloud-plus"></i> Click here to add images</div>
      </label>
      <input type="file" multiple id="file" @change="onFileChange">
    </div>
    <div class="preview">
      <div v-for="(image, index) in images" :key="index" class="image-container">
        <img :src="image" alt="Selected Image" class="previewed-image"/>
        <button class="delete-button" @click="removeImage(index)"><i class="bi bi-x-lg"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: []
    };
  },
  methods: {
    onFileChange(event) {
      const files = event.target.files;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (e) => {
          this.images.push(e.target.result);
        };

        reader.readAsDataURL(file);
      }
    },
    removeImage(index) {
      this.images.splice(index, 1); // Remove the image at the specified index
    }
  }
};
</script>

<style lang="scss">
@import url("@/assets/styles/_image_select.scss");
// .image-select {
//   .form {
//     margin-bottom: 20px;
//   }

//   .preview {
//     display: flex;
//     flex-wrap: wrap;

//     .image-container {
//       position: relative;
//       margin-right: 10px;
//       margin-bottom: 10px;

//       img {
//         max-width: 100px; // Set a max width for the images
//       }

//       button {
//         position: absolute;
//         top: 0;
//         right: 0;
//         background-color: red;
//         color: white;
//         border: none;
//         cursor: pointer;
//         padding: 5px;
//         border-radius: 3px;
//       }
//     }
//   }
// }
</style>
