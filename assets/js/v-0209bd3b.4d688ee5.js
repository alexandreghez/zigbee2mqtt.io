"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[78508],{633071:(e,r,t)=>{t.r(r),t.d(r,{data:()=>o});const o=JSON.parse('{"key":"v-0209bd3b","path":"/guide/adapters/flashing/flashing_the_cc2531.html","title":"Flashing the CC2531 USB stick","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":2,"title":"Required hardware","slug":"required-hardware","link":"#required-hardware","children":[]},{"level":2,"title":"Windows","slug":"windows","link":"#windows","children":[]},{"level":2,"title":"Linux or MacOS","slug":"linux-or-macos","link":"#linux-or-macos","children":[]}],"git":{"updatedTime":1672478526000},"filePathRelative":"guide/adapters/flashing/flashing_the_cc2531.md"}')},268162:(e,r,t)=>{t.r(r),t.d(r,{default:()=>z});var o=t(166252),a=t(122743),n=t(654256);const l=t.p+"assets/img/connected.843d662a.jpg",i=t.p+"assets/img/smartrf.f6080d0e.png",s=(0,o._)("h1",{id:"flashing-the-cc2531-usb-stick",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#flashing-the-cc2531-usb-stick","aria-hidden":"true"},"#"),(0,o.Uk)(" Flashing the CC2531 USB stick")],-1),A=(0,o._)("em",null,"CC Debugger",-1),d=(0,o._)("em",null,"Raspberry Pi",-1),u=(0,o._)("em",null,"Arduino Uno",-1),h=(0,o._)("em",null,"ESP8266",-1),c=(0,o._)("strong",null,"NOTE 1",-1),g=(0,o._)("strong",null,"NOTE 2",-1),m={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/source_routing",target:"_blank",rel:"noopener noreferrer"},k=(0,o._)("strong",null,"NOTE 3",-1),p={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/default",target:"_blank",rel:"noopener noreferrer"},b=(0,o.uE)('<h2 id="required-hardware" tabindex="-1"><a class="header-anchor" href="#required-hardware" aria-hidden="true">#</a> Required hardware</h2><p>The following additional hardware is required in order to flash the CC2531:</p><table><thead><tr><th>Name</th><th>Price</th><th>Picture</th></tr></thead><tbody><tr><td>CC debugger</td><td>+-9$ on AliExpress</td><td><img src="'+a+'" alt="CC debugger"></td></tr><tr><td>CC2531 downloader cable</td><td>+-2$ on AliExpress</td><td><img src="'+n+'" alt="Downloader cable CC2531"></td></tr></tbody></table><h2 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h2>',4),f={href:"http://www.ti.com/tool/flash-programmer",target:"_blank",rel:"noopener noreferrer"},w=(0,o._)("strong",null,"NOT V2",-1),U={href:"https://www.ti.com/tool/CC-DEBUGGER",target:"_blank",rel:"noopener noreferrer"},C={href:"http://www.ti.com/lit/ug/swru197h/swru197h.pdf",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.youtube.com/watch?v=jyKrxxXOvQY",target:"_blank",rel:"noopener noreferrer"},E=(0,o._)("li",null,[(0,o.Uk)("Connect "),(0,o._)("code",null,"CC debugger --\x3e Downloader cable CC2531 --\x3e CC2531 USB sniffer"),(0,o.Uk)(".")],-1),_=(0,o._)("li",null,[(0,o.Uk)("Connect "),(0,o._)("strong",null,"BOTH"),(0,o.Uk)(" the "),(0,o._)("code",null,"CC2531 USB sniffer"),(0,o.Uk)(" and the "),(0,o._)("code",null,"CC debugger"),(0,o.Uk)(" to your PC using USB.")],-1),x={href:"http://www.ti.com/lit/ug/swru197h/swru197h.pdf",target:"_blank",rel:"noopener noreferrer"},B=(0,o._)("img",{src:l,alt:"How to connect"},null,-1),S={href:"https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip",target:"_blank",rel:"noopener noreferrer"},Q=(0,o._)("li",null,[(0,o.Uk)("Start SmartRF Flash Programmer, setup as shown below and press "),(0,o._)("code",null,"Perform actions"),(0,o.Uk)(". Make sure to select the "),(0,o._)("code",null,".hex"),(0,o.Uk)(" file, not the "),(0,o._)("code",null,".bin"),(0,o.Uk)(" file! "),(0,o._)("img",{src:i,alt:"SmartRF Flash Programmer"})],-1),F=(0,o._)("h2",{id:"linux-or-macos",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#linux-or-macos","aria-hidden":"true"},"#"),(0,o.Uk)(" Linux or MacOS")],-1),y={href:"https://github.com/frans-Willem",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/dashesy/cc-tool",target:"_blank",rel:"noopener noreferrer"},H={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},q=(0,o.uE)('<ul><li>Ubuntu (version &gt;= 20.04): install cc-tool with <code>sudo apt install cc-tool</code> &amp; go on with 3.</li><li>Ubuntu/Debian: libusb-1.0-0-dev, libboost-all-dev, autoconf, libtool</li><li>Fedora: dh-autoreconf, boost-devel, libusb1-devel, gcc-c++</li><li>Archlinux: dh-autoreconf, libusb, boost</li><li>macOS: brew install autoconf automake libusb boost pkgconfig libtool</li><li>Raspbian: dh-autoreconf, libusb-1.0-0-dev, libboost-all-dev</li></ul><ol start="2"><li>Build cc-tool</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/dashesy/cc-tool.git\n<span class="token builtin class-name">cd</span> cc-tool\n./bootstrap\n./configure\n<span class="token function">make</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),M={start:"3"},P=(0,o._)("li",null,[(0,o.Uk)("Connect "),(0,o._)("code",null,"CC debugger --\x3e Downloader cable CC2531 --\x3e CC2531 USB sniffer"),(0,o.Uk)(".")],-1),T=(0,o._)("li",null,[(0,o.Uk)("Connect "),(0,o._)("strong",null,"BOTH"),(0,o.Uk)(" the "),(0,o._)("code",null,"CC2531 USB sniffer"),(0,o.Uk)(" and the "),(0,o._)("code",null,"CC debugger"),(0,o.Uk)(" to your PC using USB.")],-1),J={href:"http://www.ti.com/lit/ug/swru197h/swru197h.pdf",target:"_blank",rel:"noopener noreferrer"},D=(0,o._)("img",{src:l,alt:"How to connect"},null,-1),W={href:"https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip",target:"_blank",rel:"noopener noreferrer"},I=(0,o._)("li",null,"Flash your firmware:",-1),O=(0,o.uE)('<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo ./cc-tool -e -w CC2531ZNP-Prod.hex\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="how-to-check-the-installed-firmware-version" tabindex="-1"><a class="header-anchor" href="#how-to-check-the-installed-firmware-version" aria-hidden="true">#</a> How-to check the installed firmware version</h1><p>Zigbee2MQTT will output the installed firmware version to the Zigbee2MQTT log on startup:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Zigbee2MQTT:info  2019-11-09T13:01:14: Coordinator firmware version: &#39;{&quot;type&quot;:&quot;zStack30x&quot;,&quot;meta&quot;:{&quot;transportrev&quot;:2,&quot;product&quot;:2,&quot;majorrel&quot;:2,&quot;minorrel&quot;:7,&quot;maintrel&quot;:2,&quot;revision&quot;:20190425}}&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In the above example the version is <code>20190425</code>.</p>',5),G={},z=(0,t(983744).Z)(G,[["render",function(e,r){const t=(0,o.up)("RouterLink"),a=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[s,(0,o._)("p",null,[(0,o.Uk)("The firmware can be flashed with multiple devices. The easiest but most expensive option is with the "),A,(0,o.Uk)(" from Texas Instruments, which is described on this page. However, you can also use a "),d,(0,o.Uk)(" or a MCU like the "),u,(0,o.Uk)(" or the cheap "),h,(0,o.Uk)(" with four dupont cables and optionally a downloader cable. Information about these methods can be found here: "),(0,o.Wm)(t,{to:"/guide/adapters/flashing/alternative_flashing_methods.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("Alternative firmware flashing methods")])),_:1}),(0,o.Uk)(".")]),(0,o._)("p",null,[c,(0,o.Uk)(": In case you are already running a Zigbee network: reflashing does not require repairing of all devices, see "),(0,o.Wm)(t,{to:"/guide/faq/#what-does-and-does-not-require-repairing-of-all-devices"},{default:(0,o.w5)((()=>[(0,o.Uk)("What does and does not require repairing of all devices?")])),_:1})]),(0,o._)("p",null,[g,(0,o.Uk)(": In this tutorial we will flash the default firmware. For larger network (20+) or when experiencing stability problems the "),(0,o._)("a",m,[(0,o.Uk)("source routing firmware"),(0,o.Wm)(a)]),(0,o.Uk)(" is recommended. This firmware has a limitation of 5 direct children so make sure to have enough routers in your network.")]),(0,o._)("p",null,[k,(0,o.Uk)(": The CC2531 USB dongle can be flashed also with the "),(0,o._)("a",p,[(0,o.Uk)("CC2530 firmware"),(0,o.Wm)(a)]),(0,o.Uk)(" to be operated via the P0.2/P0.3 serial pins (which are the first one and the second one of the IO expansion port). Be careful when using the CC2531 in association with an ESP8266 (as if it were the "),(0,o.Wm)(t,{to:"/guide/adapters/flashing/connecting_cc2530.html#via-an-esp8266"},{default:(0,o.w5)((()=>[(0,o.Uk)("CC2530")])),_:1}),(0,o.Uk)("): the onboard USB power supply may not be able to power an additional ESP8266 without overheating/failing.")]),b,(0,o._)("ol",null,[(0,o._)("li",null,[(0,o.Uk)("Install "),(0,o._)("a",f,[(0,o.Uk)("SmartRF Flash programmer"),(0,o.Wm)(a)]),(0,o.Uk)(" ("),w,(0,o.Uk)("). This software is free but requires a Texas Instruments account in order to download.")]),(0,o._)("li",null,[(0,o.Uk)("Install the "),(0,o._)("a",U,[(0,o.Uk)("CC debugger driver"),(0,o.Wm)(a)]),(0,o.Uk)(" on your PC (Windows only). Before continuing, verify that the CC Debugger driver has been installed correctly. See "),(0,o._)("a",C,[(0,o.Uk)("Figure 1. Verify Correct Driver Installation @ Chapter 5.1"),(0,o.Wm)(a)]),(0,o.Uk)(". In case the CC Debugger is not recognized correctly "),(0,o._)("a",v,[(0,o.Uk)("install the driver manually"),(0,o.Wm)(a)]),(0,o.Uk)(".")]),E,_,(0,o._)("li",null,[(0,o.Uk)("If the light on the CC debugger is RED press set reset button on the CC debugger. The light on the CC debugger should now turn GREEN. If not use "),(0,o._)("a",x,[(0,o.Uk)("CC debugger user guide"),(0,o.Wm)(a)]),(0,o.Uk)(" to troubleshoot your problem. "),B]),(0,o._)("li",null,[(0,o.Uk)("Download the firmware "),(0,o._)("a",S,[(0,o.Uk)("CC2531_DEFAULT_20211115.zip"),(0,o.Wm)(a)])]),Q]),F,(0,o._)("p",null,[(0,o.Uk)("Credits to "),(0,o._)("a",y,[(0,o.Uk)("@Frans-Willem"),(0,o.Wm)(a)]),(0,o.Uk)(" for majority of instructions.")]),(0,o._)("ol",null,[(0,o._)("li",null,[(0,o.Uk)("Install prerequisites for "),(0,o._)("a",R,[(0,o.Uk)("CC-Tool"),(0,o.Wm)(a)]),(0,o.Uk)(" using a package manager (e.g. "),(0,o._)("a",H,[(0,o.Uk)("Homebrew"),(0,o.Wm)(a)]),(0,o.Uk)(" for macOS)")])]),q,(0,o._)("ol",M,[P,T,(0,o._)("li",null,[(0,o.Uk)("If the light on the CC debugger is RED, press the Reset button on the CC debugger. The light on the CC debugger should now turn GREEN. If not, try to reboot and retry or follow the "),(0,o._)("a",J,[(0,o.Uk)("CC debugger user guide"),(0,o.Wm)(a)]),(0,o.Uk)(" to troubleshoot your problem. "),D]),(0,o._)("li",null,[(0,o.Uk)("Download the firmware "),(0,o._)("a",W,[(0,o.Uk)("CC2531_DEFAULT_20211115.zip"),(0,o.Wm)(a)]),(0,o.Uk)(".")]),I]),O])}]])},122743:e=>{e.exports="data:image/jpeg;base64,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"},654256:(e,r,t)=>{e.exports=t.p+"assets/img/downloader_cable.720e6aa2.png"}}]);