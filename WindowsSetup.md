# 🪟 Windows Local Setup - Java JDK 17 & Gradle 8.5 <!-- omit in toc -->

- [1. Installing Java JDK 17 On Your Machine](#1-installing-java-jdk-17-on-your-machine)
  - [1.1. Adoptium Java JDK 17 Installation](#11-adoptium-java-jdk-17-installation)
- [2. Gradle 8.5 Installation](#2-gradle-85-installation)

This guide is for local setup. If you are working on CSE, you do not need to follow this.

It is recommended to setup development locally in-case you need to use it.

This guide does not support **ARM** based Windows Machines.

# 1. Installing Java JDK 17 On Your Machine

> It is important that you install exactly **Java JDK version 17.x** on your machine.
>
> This is how we will be compiling and testing your code.

Ensure that you do not have younger or older versions of Java JDK on your machine. If you do, you will need to uninstall or setup your paths correctly.

You can check if you have a previous version of Java installed by opening a terminal and running the following command:

```bash
java --version
```

## 1.1. Adoptium Java JDK 17 Installation

Navigate to [Latest Releases | Adoptium](https://adoptium.net/en-GB/temurin/releases/?version=17&os=windows&package=jdk) in your browser, and download the `.msi` file for your architecture and Windows OS.

> Most computers will be compatible with the x64 architecture

> **Make sure you are installing the `JDK` version, not `JRE`.**

Open the `.msi` file you downloaded and follow the prompts to install Java.

You can verify the installation succeeded by checking the version using the command:

> You may need to close all terminals you have open, and open a new one for the command to work

```bash
java --version
```

The output should look like the following (doesn’t need to be identical. Most importantly needs to show Java 17)

```
openjdk 17.0.9 2023-10-17
OpenJDK Runtime Environment Temurin-17.0.9+9 (build 17.0.9+9)
OpenJDK Client VM Temurin-17.0.9+9 (build 17.0.9+9, mixed mode, emulated-client)
```

# 2. Gradle 8.5 Installation

> It is important you install exactly Gradle 8.5.

1. Download the Gradle zip file from [here](https://gradle.org/next-steps/?version=8.5&format=bin).
2. Create a new directory `C:\Gradle` with File Explorer.

> You can choose to pick a different directory. In this case, replace all instances of `C:\Gradle` with your chosen directory.

3. Unzip the contents of the Gradle zip file and copy the contents of the `gradle-8.5` folder into the directory `C:\Gradle`

![C:\Gradle folder contents after Step 3](../images/windowsGradleFolder.png) C:\Gradle folder contents after Step 3

4. Search and open up `Edit the system environment variables`. There are two very similar options. Ensure you pick the matching name (highlighted red in the image below).

![](../images/windowsEditEnv.png)

5. Click on `Environment Variables`. This should open another pop-up.

![](../images/windowsEnv.png)

6. Under `System variables`, select `Path` and click `Edit`.

![](../images/windowsEditPath.png)

7. Click New and add a new entry called `C:\Gradle\bin`. Then click `OK` to close the current pop-up, and `OK` again to close the Environment Variables pop-up.

![](../images/windowsPathExample.png)

8. Close all open terminals.
9. Verify installation by opening a terminal (Powershell or Command Prompt) and running:

```bash
gradle --version
```

The following output is expected:

```
------------------------------------------------------------
Gradle 8.5
------------------------------------------------------------

Build time:   2023-11-29 14:08:57 UTC
Revision:     28aca86a7180baa17117e0e5ba01d8ea9feca598

Kotlin:       1.9.20
Groovy:       3.0.17
Ant:          Apache Ant(TM) version 1.10.13 compiled on January 4 2023
JVM:          17.0.9 (Eclipse Adoptium 17.0.9+9)
OS:           Windows 11 10.0 x86
```

The most important things to note are `Gradle 8.5` and `JVM: 17.x.y`.

> If some of your terminals are not detecting `gradle` (such as terminals inside VSCode), restart your computer and try again.
