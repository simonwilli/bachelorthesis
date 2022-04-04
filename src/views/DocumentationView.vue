<template>
  <div class="Documentation">
    <documentation-frame
      title="Docker"
      description="Hallo"
      picture="https://logos-world.net/wp-content/uploads/2021/02/Docker-Symbol.png"
    />
    <documentation-frame
      title="Kubernetes"
      description="Aloha"
      picture="https://ih1.redbubble.net/image.2299019477.7031/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
    />
    <documentation-frame
      title="AWS EC2"
      description="Aloha"
      picture="https://miro.medium.com/max/360/1*dfEIFZvuNC7ljFy2QNurLA.png"
    />
  </div>
</template>

<script>
import DocumentationFrame from "../components/DocumentationFrame.vue";

export default {
  components: { DocumentationFrame },
};
</script>
