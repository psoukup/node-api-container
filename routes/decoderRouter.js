var express = require('express');
var router = express.Router();

// will handle any request that ends in /decoder
router.get('/', function(req, res, next) {
    res.send(decoder);
});

module.exports = router;

 var decoder = [
     {"code":"Twelve Factor App", "decode": "A methodology for building modern, scalable, maintainable software-as-a-service apps."},
     {"code":"Agile", "decode": "The Agile Method is a particular approach to project management that is utilized in software development. This method assists teams in responding to the unpredictability of constructing software. It uses incremental, iterative work sequences that are commonly known as sprints."},
     {"code":"Ant, Maven, Gradel", "decode": "Build Automation. Gradle is the next evolutionary step in JVM-based build tools. It draws on lessons learned from established tools such as Ant and Maven and takes their best ideas to the next level"},
     {"code":"API-first", "decode": "A strategy where the first order of business is to develop an Application Program Interface putting your target developer’s interest then build the product on top of it be it a website, mobile application or a SaaS software. By building on top of APIs with developers in mind, you and your developers are saving a lot of work while laying down the foundations for others to build on top of."},
     {"code":"Continuous Delivery (CD)", "decode": "A software engineering approach in which teams produce software in short cycles, ensuring that the software can be reliably released at any time. It aims at building, testing, and releasing software faster and more frequently."},
     {"code":"Continous Integration", "decode": "A development practice that requires developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early."},
     {"code":"DevOps", "decode": "An enterprise software development phrase used to mean a type of agile relationship between Development and IT Operations. The goal of DevOps is to change and improve the relationship by advocating better communication and collaboration between the two business units. One of the key tennants is to 'automate everything'"},
     {"code":"Docker", "decode": "Docker is an open-source program that enables a Linux application and its dependencies to be packaged as a container. Container-based virtualization isolates applications from each other on a shared operating system (OS)."},
     {"code":"JAR/EAR/WAR", "decode": "In J2EE application, modules are packaged as EAR, JAR and WAR based on their functionalityJAR: EJB modules which contain enterprise java beans (class files) and EJB deployment descriptor are packed as JAR files with .jar extensionWAR: Web modules which contain Servlet class files, JSP Files, supporting files, GIF and HTML files are packaged as JAR file with .war (web archive) extensionEAR: All above files (.jar and .war) are packaged as JAR file with .ear (enterprise archive) extension and deployed into Application Server."},
     {"code":"Git / Git Hub", "decode": "Git is a version control system (VCS) that is used for software development and other version control tasks. As a distributed revision control system it is aimed at speed, data integrity, and support for distributed, non-linear workflows.GitHub is a web-based Git repository hosting service. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features."},
     {"code":"IDE", "decode": "IDE (Integrated Development Environment) - A desktop-based programming environment (e.g. Eclipse, NetBeans, Jdeveloper). Over time, these are bing replaced by Web-based development environments that require no desktop software beyond a Web Browser."},
     {"code":"Infrastructure as Code (IaC) – Chef/Puppet", "decode": "The process of managing and provisioning computing infrastructure (processes, bare-metal servers, virtual servers, etc.) and their configuration through machine-processable definition files, rather than physical hardware configuration or the use of interactive configuration tools. Chef/Puppet are key configuration management systems on Linux. Chef is more than a configuration management tool, along with Puppet, Ansible and Otter it's one of the industry's most notable Infrastructure as Code (IAC) tools."},
     {"code":"Microservices", "decode": "An approach to application development in which a large application is built as a suite of modular services. Each module supports a specific business goal and uses a simple, well-defined interface to communicate with other modules."},
     {"code":"Oracle JET", "decode": "A complete yet modular JavaScript development toolkit helping developers build engaging user interfaces (completely client-side). Based on jQuery, Knockout, RequireJS, and Cordova open source libraries. "},
     {"code":"Polylot", "decode": "In computing, a polyglot is a computer program or script written in a valid form of multiple programming languages, which performs the same operations or output independent of the programming language used to compile or interpret it. Example languages are Node.js, Ruby, Python, Angular."},
     {"code":"REST", "decode": "REST (REpresentational State Transfer) is an architectural style, and an approach to communications that is often used in the development of Web services. Generally preferred over SOA/Web-services for Cloud and Mobile based development because of it's light weight and agility."},
     {"code":"Selenium, Arquillian", "decode": "Testing tools for Continuous Integration"},
 ];
