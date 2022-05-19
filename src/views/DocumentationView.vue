<template>
  <div class="Documentation">
    <documentation-frame
      title="VMware vSphere / Typ 1 Hypervisor"
      description="Gemäss der Marktanalyse von Datanyze (2021b) ist VMware vSphere Marktführer mit einem Marktanateil von 11.77 Prozent. VMware vSphere ist die Virtualisierungsplattform von VMware, welche die Kernkomponenten ESXi und vCenter Server umfasst (VMwa-re, o. J.-b). ESXi ist die Virtualisierungsplattform, auf der die VMs erstellt und ausge-führt werden (VMware, o. J.-b). VMware ESXi ist einer der typischen Hypervisors vom Typ 1 (Vojtesek & Pipis, 2016, S. 242). Der vCenter Server verwaltet und orchestriert die ESXi Hosts und die darauf bereitgestellten VMs (VMware, o. J.-a). Mit dieser Kompo-nente wird es möglich zentralisiert und effizient die Virtualisierung zu verwalten und da-mit eine virtuelle Infrastruktur automatisiert bereitzustellen (VMware, o. J.-a). (Bildquelle: https://blogs.vmware.com/vsphere/2021/10/vsphere-update-3a.html) "
      :picture="require('@/assets/vmware_vsphere.png')"
    />
    <documentation-frame
      title="Microsoft Hyper-V / Typ 1 Hypervisor"
      description="Hyper-V ist das Virtualisierungsprodukt von Microsoft (Microsoft, 2021), welches ge-mäss Vojtesek und Pipis (2016, S. 242) zum Typ 1 Hypervisor gehört und einen Marktanteil von 10.9 Prozent hat (Datanyze, 2021b). Der Hyper-V ist ein Teil des Windows Servers oder kann als selbstständiges Produkt heruntergeladen werden (Microsoft, 2021). Mit Hyper-V können virtualisierte Computerumgebungen und VMs erstellt und verwaltet werden (Microsoft, 2021). Ähnlich wie das vCenter bietet der System Center Virtual Machine Manager die Funktionen für das Konfigurieren und Verwalten von mehreren Hypervisors an (Microsoft, 2022). (Bildquelle: https://www.vembu.com/blog/hyper-v-servers-vs-windows-server-hyper-v-overview/)"
      :picture="require('@/assets/hyper-v.png')"
    />
    <documentation-frame
      title="Virtualbox / Typ 2 Hypervisor"
      description="VirtualBox ist eine Virtualisierungssoftware, welche als Open Source verfügbar ist (Oracle, 2021, S. 4). Es ermöglicht Benutzenden mehrere Betriebssysteme auf ihrem Computer auszuführen (Oracle, 2021, S. 4). Die Anwendung wird für IT Fachleute entwickelt um IT-Lösungen zu testen, zu entwickeln oder zu demonstrieren (Oracle, 2021, S. 4). Gemäss Oracle (2021, S. 4), erreicht VirtualBox tausende Downloads pro Tag und ist eine der beliebtesten kostenlosen Virtualisierungssoftware. (Bildquelle: https://www.linuxadictos.com/en/The-new-version-virtualbox-6-0-8-has-already-been-released%2C-solving-some-problems.html)"
      :picture="require('@/assets/virtualbox.jpeg')"
    />
    <documentation-frame
      title="Linux Container"
      description="Das LXC Projekt ist die Entwicklung eines Toolkits für die Isolierung von Prozessen (Linuxcontainers, n.D.). Die Virtualisierung geschieht auf Betriebssystemebene und erlaubt es, mehrere Linux-Betriebssysteme gleichzeitig auf einem Linuxhost auszuführen (Kahuha, 2022). Entgegen der allgemeinen Meinung teilt sich der LXC nicht den Host-kernel, sondern nutzt Funktionen davon um ein isoliertes Filesystem und eigenständige Prozesse zu kreieren (Kahuha, 2022). Somit ist LXC ein tief im System eingebettetes Tool, welches die Isolationsfunktionen eines Kernels zur Verfügung stellt, mit welchem Container erstellt werden können (Eder, 2016, S. 5). Gemäss Datanyze (Datanyze, 2021a) besitzt LXC einen Marktanteil von 25 Prozent. (Bildquelle: https://supportblog.ch/setup-lxc-container-with-gitlab/)"
      :picture="require('@/assets/lxc.png')"
    />
    <documentation-frame
      title="Docker"
      description="Die Docker Runtime ist kein Ersatz für LXC sondern erweitert diese Funktionen mit verschiedenen weiteren Funktionen (Docker, 2022a). Docker wurde entwickelt um die Por-tabilität zu erhöhen (Kahuha, 2022). Dafür wurde das beschreibende Format Dockerfile kreiert (Kahuha, 2022). Diese Datei dient zur Bündelung der Anwendung mit ihren Abhängigkeiten in einem Container (Docker, 2022a). Ein Docker Container kann auf allen Docker Runtimes ausgeführt werden und verhält sich dabei überall genau gleich (Docker, 2022a). Mit der Kombination der low-level Isolierung und den high-level Funktionen erleichtert Docker die Erstellung von Containern (Eder, 2016, S. 5). Docker besitzt einen Marktanteil von 22 Prozent (Datanyze, 2021a) (Bildquelle: https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png)"
      :picture="require('@/assets/docker.png')"
    />
    <documentation-frame
      title="Docker Swarm"
      description="In einer produktiven Umgebung müssen Container verwaltet werden und es muss sichergestellt sein, dass keine Ausfallzeiten auftreten (Kubernetes, 2022). Docker Swarm ist eine Anwendung für die Container Orchestrierung (Docker, 2022c). Einer der Hauptvor-teile bei der Nutzung von Docker Swarm gegenüber eigenständigen Containern besteht darin, dass die Konfiguration eines Dienstes verändert werden kann (Docker, 2022c). Docker Swarm stoppt Container mit veralteten Konfiguration, aktualisiert sie und erstellt neue Container (Docker, 2022c). Aufgrund dieser Funktionalität benötigen Swarm Container zusätzlich zur Docker runtime einen Swarm Manager für den Betrieb (Docker, 2022c). (Bildquelle: https://hub.docker.com/_/swarm)"
      :picture="require('@/assets/docker_swarm.png')"
    />
    <documentation-frame
      title="Kubernetes"
      description="Kubernetes bietet wie Docker Swarm ein Framework, um verteilte Systeme widerstands-fähiger zu betreiben, indem es die Skalierung und die Ausfallsicherung für die Anwendungen bereit stellt (Kubernetes, 2022). Das Kubernetes Projekt ist eine portable, erwei-terbare Open-Source-Plattform für die Verwaltung von Containern, welche im Jahr 2014 von Google veröffentlicht wurde (Kubernetes, 2022).Heute besitzt es einen Marktanteil von 17 Prozent (Datanyze, 2021a). Die Applikation beinhaltet über 15 Jahre Erfahrungen von Google in der Ausführung von Produktions-Workloads im grossen Massstab, sowie die Ideen und Praktiken der Community (Kubernetes, 2022). In früheren Versionen wur-de Docker als Container Runtime eingesetzt, jedoch nicht mehr ab der Version 1.20 (Cast-ro et al., 2020). Seit dieser Version werden Runtimes verwendet, welche das Container Runtime Interface unterstützen, wie containerd oder CRI-O (Castro et al., 2020). (Bildquelle: https://www.drupal.org/project/k8s )"
      :picture="require('@/assets/kubernetes.png')"
    />
    <documentation-frame
      title="Amazon Elastic Compute Cloud"
      description="Gemäss Spiceworks (2019) betreiben 98 Prozent der Firmen eigene Server vor Ort, je-doch hat die Pandemie, gemäss Altynpara (2021), einige Anpassungen ausgelöst. Die Unternehmen migrieren ihre Systeme in die Cloud, um die Geschäftskontinuität zu ge-währleisten (Altynpara, 2021). Die Forschung von Flexera (2022, S. 80) zeigt, dass die Cloud Computing Nutzung in mehr als 50 Prozent der Unternehmen höher ausgefallen ist als vorhergesagt. Amazon Elastic Compute Cloud ist ein Webdienst, der sichere, anpass-bare Rechenkapazität in der Cloud bereitstellt (Amazon Web Services, 2022, S. 22). Der Service wurde für das Bedürfnis nach skalierbaren Computing Ressourcen entwickelt (Amazon Web Services, 2022, S. 22). Es überlässt die komplette Kontrolle über die Ressource dem Benutzenden (Amazon Web Services, 2022, S. 22). Im Allgemeinen erfüllen VMs und Elastic Compute Cloud Instanzen denselben Zweck (Alibaba Cloud, o. J.). (Bildquelle: https://digitalcloud.training/amazon-ec2/)"
      :picture="require('@/assets/ec2.jpeg')"
    />
    <documentation-frame
      title="Amazon Elastic Kubernetes Service"
      description="Mit Amazon Elastic Kubernetes Service wird die Bereitstellung, Verwaltung und Skalie-rung von containerisierten Anwendungen mit Kubernetes in der Amazon Cloud vereinfacht (Amazon Web Services, 2022, S. 27). Die Kubernetes-Verwaltungsinfrastruktur wird von Amazon betrieben, jedoch nicht verwaltet (Amazon Web Services, 2022, S. 27). Gemäss Amazon (2022, S. 27) ist dieser Service Kubernetes-konform. So können alle Anwendungen, die in einer Kubernetes-Umgebung ausführbar sind, auf dieser Plattform betrieben werden (Amazon Web Services, 2022, S. 27). (Bildquelle: https://www.opsmx.com/blog/amazon-eks-2/ )"
      :picture="require('@/assets/eks.png')"
    />
    <documentation-frame
      title="Amazon Elastic Container Service "
      description="Amazon Elastic Container Service ist ein skalierbarer Orchestrierungsdienst, für containerisierte Anwendungen (Amazon Web Services, 2022, S. 27). Mit diesem Service muss keine eigene Container-Orchestrierungssoftware, wie beim Elastic Kubernetes Service, betrieben und verwaltet werden (Amazon Web Services, 2022, S. 27). Gemäss Singh (2020) reduziert Amazon Elastic Container Service die von der Kundschaft benötigte Zeit für die Bereitstellung von containerisierten Anwendungen, da diese keine Entscheidungen über Rechen-, Netzwerk- und Sicherheitskonfiguration treffen muss. Wenn Nutzende jedoch auf das Kubernetes Ökosystem zugreifen möchten, entscheiden sie sich für den Amazon Elastic Kubernetes Service, da dieser mehr Flexibilität in der Implementation bietet (Singh, 2020). (Bildquelle: https://aws.amazon.com/blogs/aws/amazon-ecs-supports-efs/)"
      :picture="require('@/assets/ecs.png')"
    />
  </div>
</template>

<script>
import DocumentationFrame from '../components/DocumentationFrame.vue';

export default {
  components: { DocumentationFrame },
};
</script>
