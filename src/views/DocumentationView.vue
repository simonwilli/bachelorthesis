<template>
  <div class="Documentation">
    <documentation-frame
      title="VMware vSphere / Typ 1 Hypervisor"
      description="Gemäss der Marktanalyse von Datanyze (2021b) ist VMware vSphere der Marktführer mit einem Marktanateil von 11.77 Prozent. VMware vSphere ist die Virtualisierungsplatt-form von VMware, welche die Kernkomponenten ESXi und vCenter Server umfasst (VMware, o. J.-b). ESXi ist die Virtualisierungsplattform, auf der die VMs erstellt und ausgeführt werden (VMware, o. J.-b). VMware ESXi ist einer der typischen Hypervisors vom Typ 1 (Vojtesek & Pipis, 2016, S. 242). Der vCenter Server verwaltet und orches-triert die ESXi Hosts und die darauf bereitgestellten VMs (VMware, o. J.-a). Mit dieser Komponente wird es möglich zentralisiert und effizient die Virtualisierung zu verwalten und damit eine virtuelle Infrastruktur automatisiert bereitzustellen (VMware, o. J.-a). "
      :picture="require('@/assets/vmware_vsphere.png')"
    />
    <documentation-frame
      title="Microsoft Hyper-V / Typ 1 Hypervisor"
      description="Hyper-V ist das Virtualisierungsprodukt von Microsoft (Microsoft, 2021), welches ge-mäss Vojtesek und Pipis (2016, S. 242) zum Typ 1 Hypervisor gehört und einen Markt-anteil von 10.9 Prozent hat (Datanyze, 2021b). Der Hyper-V ist ein Teil des Windows Servers oder kann als selbstständiges Produkt heruntergeladen werden (Microsoft, 2021). Mit Hyper-V  können virtualisierte Computerumgebungen und VMs erstellt und verwal-tet werden (Microsoft, 2021). Ähnlich wie das vCenter bietet der System Center Virtual Machine Manager die Funktionen für das Konfigurieren und Verwalten von mehreren Hypervisors (Microsoft, 2022b)."
      :picture="require('@/assets/hyper-v.png')"
    />
    <documentation-frame
      title="Virtualbox / Typ 2 Hypervisor"
      description="VirtualBox ist eine Virtualisierungssoftware, welche als Open Source verfügbar ist (Oracle, 2021, S. 4). Es ermöglicht Benutzenden mehrere Betriebssysteme auf ihrem Computer auszuführen (Oracle, 2021, S. 4). Die Anwendung wird für IT Fachleute ent-wickelt um IT-Lösungen zu testen, zu entwickeln oder zu demonstrieren (Oracle, 2021, S. 4). Gemäss Oracle (2021, S. 4), erreicht VirtualBox tausende Downloads pro Tag und ist eine der beliebtesten kostenlosen Virtualisierungssoftware."
      :picture="require('@/assets/virtualbox.jpeg')"
    />
    <documentation-frame
      title="Linux Container"
      description="Das LXC Projekt ist die Entwicklung eines Toolkits für die Isolierung von Prozessen (Linuxcontainers, n.D.). Die Virtualisierung geschieht auf Betriebssystemebene und er-laubt es, mehrere Linux-Betriebssysteme gleichzeitig auf einem Linuxhost auszuführen (Kahuha, 2022). Entgegen der allgemeinen Meinung teilt sich der LXC nicht den Host-kernel, sondern nutzt Funktionen davon um ein isoliertes Filesystem und eigenständige Prozesse zu kreieren (Kahuha, 2022). Somit ist LXC ein low-level Tool, welches die Iso-lationsfunktionen eines Kernels zur Verfügung stellt, mit welchem Container erstellt wer-den können  (Eder, 2016, S. 5). Gemäss Datanyze (Datanyze, 2021a) besitzt LXC einen Marktanteil von 25 Prozent. "
      :picture="require('@/assets/lxc.png')"
    />
    <documentation-frame
      title="Docker"
      description="Die Docker Runtime ist kein Ersatz für LXC sondern erweitert diese low-level Funktio-nen mit einem High Level Tool welches verschiedene Funktionen bietet (Docker, 2022a). Docker wurde entwickelt um die Applikationsportabilität zu erhöhen (Kahuha, 2022). Dafür wurde das beschreibende Format Dockerfile kreiert (Kahuha, 2022). Diese Datei dient zur Bündelung der Anwendung mit ihren Abhängigkeiten in einem Container (Do-cker, 2022a). Ein Docker Container kann auf allen Docker Runtimes ausgeführt werden und verhält sich dabei überall genau gleich (Docker, 2022a). Mit der Kombination der low-level Isolierung und den high-level Funktionen erleichtert Docker die Erstellung von Containern (Eder, 2016, S. 5). Docker besitzt einen Marktanteil von 22 Prozent (Datany-ze, 2021a)"
      :picture="require('@/assets/docker.png')"
    />
    <documentation-frame
      title="Docker Swarm"
      description="In einer produktiven Umgebung müssen Container verwaltet werden und es muss sicher-gestellt sein, dass keine Ausfallzeiten auftreten (Kubernetes, 2020b). Wenn ein Container ausfällt, muss ein anderer Container gestartet werden (Kubernetes, 2020b). Docker Swarm ist eine Anwendung für die Container Orchestrierung (Docker, 2022c). Einer der Hauptvorteile bei der Nutzung von Docker Swarm gegenüber eigenständigen Containern besteht darin, dass die Konfiguration eines Dienstes verändert werden kann (Docker, 2022c). Docker Swarm aktualisiert die Konfiguration, stoppt die Docker Container mit der veralteten Konfiguration und erstellt neue Container (Docker, 2022c). Aufgrund die-ser Funktionalität benötigen Swarm Container zusätzlich zur Docker runtime einen Swarm Manager für den Betrieb (Docker, 2022c). "
      :picture="require('@/assets/docker_swarm.png')"
    />
    <documentation-frame
      title="Kubernetes"
      description="Kubernetes bietet wie Docker Swarm ein Framework um verteilte Systeme widerstands-fähiger zu betreiben, indem es die Skalierung und die Ausfallsicherung für die Anwen-dungen bereit stellt (Kubernetes, 2020b). Das Kubernetes Projekt ist eine portable, erwei-terbare Open-Source-Plattform für die Verwaltung von Containern, welche im Jahr 2014 von Google veröffentlicht wurde (Kubernetes, 2020b).Heute besitzt es einen Marktanteil von 17 Prozent (Datanyze, 2021a). Die Applikation beinhaltet über 15 Jahre Erfahrungen von Google in der Ausführung von Produktions-Workloads im grossen Massstab, sowie die Ideen und Praktiken der Community (Kubernetes, 2020b). In früheren Versionen wurde Docker als Container Runtime eingesetzt, jedoch nicht mehr ab der Version 1.20 (Castro et al., 2020). Seit dieser Version werden Runtimes verwendet, welche das Con-tainer Runtime Interface unterstützen, wie containered oder CRI-O (Castro et al., 2020)."
      :picture="require('@/assets/kubernetes.png')"
    />
    <documentation-frame
      title="Amazon Elastic Compute Cloud"
      description="Gemäss Spiceworks betreiben 98 Prozent der Firmen eigene Server vor Ort (Tsai, 2019). Die Pandemie hat gemäss Altynpara (2021) einige Anpassungen vorgenommen. Die Un-ternehmen migrieren ihre Systeme in die Cloud, um die Geschäftskontinuität zu gewähr-leisten (Altynpara, 2021). Die Forschungen von Flexera (2022, S. 80) zeigt, dass die Cloud Computing Nutzung in mehr als 50 Prozent der Unternehmen höher ausgefallen ist als vorhergesagt. Amazon Elastic Compute Cloud ist ein Webdienst, der sichere, anpass-bare Rechenkapazität in der Cloud bereitstellt (Amazon Web Services, 2022, S. 22). Der Service wurde für das Bedürfnis nach skalierbaren Computing Ressourcen entwickelt (Amazon Web Services, 2022, S. 22). Es überlässt die komplette Kontrolle über die Res-source dem Benutzenden (Amazon Web Services, 2022, S. 22). Im Allgemeinen erfüllen VMs und Elastic Compute Cloud Instanzen denselben Zweck (Alibaba Cloud, o. J.). "
      :picture="require('@/assets/ec2.png')"
    />
    <documentation-frame
      title="Amazon Elastic Kubernetes Service"
      description="Mit Amazon Elastic Kubernetes Service wird die Bereitstellung, Verwaltung und Skalie-rung von containerisierten Anwendungen mit Kubernetes in der Amazon Cloud verein-facht (Amazon Web Services, 2022, S. 27). Die Kubernetes-Verwaltungsinfrastruktur wird von Amazon verwaltet (Amazon Web Services, 2022, S. 27). Gemäss Amazon (2022, S. 27) ist dieser Service Kubernetes-konform. So können alle Anwendungen, die in einer Kubernetes-Umgebung ausführbar sind, auf dieser Plattform betrieben werden (Amazon Web Services, 2022, S. 27)."
      :picture="require('@/assets/eks.jpeg')"
    />
    <documentation-frame
      title="Amazon Elastic Container Service "
      description="Amazon Elastic Container Service ist ein skalierbarer Orchestrierungsdienst, für containe-risierte Anwendungen (Amazon Web Services, 2022, S. 27). Mit diesem Service muss keine eigne Container-Orchestrierungssoftware verwaltet werden (Amazon Web Services, 2022, S. 27). Gemäss Singh (2020) reduziert Amazon Elastic Container Service die von der Kundschaft benötigte Zeit für die Bereitstellung von containerisierten Anwendungen, da diese keine Entscheidungen über Rechen-, Netzwerk- und Sicherheitskonfiguration treffen müssen. Wenn Benutzende auf das Kubernetes Ökosystem zugreifen möchten, entscheiden sich diese für Amazon Elastic Kubernetes Service, da dieses mehr Flexibilität in der Implementation bietet (Singh, 2020)."
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
