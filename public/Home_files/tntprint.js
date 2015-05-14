
function activeXDetect(e){"use strict";var t,n;t="";n="";try{t=document.body.getComponentVersion("{"+e+"}","ComponentID");if(t!==null){n=t}else{n=false}return n}catch(r){return glbOnError}}function stripIllegalChars(e){"use strict";var t,n,r;t=0;n="";r="";try{n=e.toLowerCase();for(t=0;t<n.length;t=t+1){if(n.charAt(t)!=="\n"&&n.charAt(t)!=="/"&&n.charAt(t)!=="\\"){r=r+n.charAt(t)}else if(n.charAt(t)==="\n"){r=r+"n"}}return r}catch(i){return glbOnError}}function stripFullPath(e,t){"use strict";var n,r,i,s;n="";r=0;i=0;s="";try{n=e;r=n.lastIndexOf(t);if(r<0){return e}i=n.length;n=n.substring(r+t.length,i);s=n;return s}catch(o){return glbOnError}}function hashtable_containsKey(e){"use strict";var t,n;t=false;n=0;for(n=0;n<this.hashtable.length;n=n+1){if(n===e&&this.hashtable[n]!==null){t=true;break}}return t}function hashtable_get(e){"use strict";return this.hashtable[e]}function hashtable_keys(){"use strict";var e,t;e=[];t=0;for(t in this.hashtable){if(this.hashtable[t]!==null){e.push(t)}}return e}function hashtable_put(e,t){"use strict";if(e===null||t===null){throw"NullPointerException {"+e+"},{"+t+"}"}this.hashtable[e]=t}function hashtable_size(){"use strict";var e,t,n;e=0;t=0;n=0;for(t in this.hashtable){if(this.hashtable[t]!==null){e=e+1}}n=e;return n}function Hashtable(){"use strict";this.containsKey=hashtable_containsKey;this.get=hashtable_get;this.keys=hashtable_keys;this.put=hashtable_put;this.size=hashtable_size;this.hashtable=[]}function fingerprint_truebrowser(){"use strict";var e,t,n;e="Unknown";n="";t=navigator.userAgent.toLowerCase();if(document.all&&document.getElementById&&navigator.savePreferences&&t.indexOf("Netfront")<0&&navigator.appName!=="Blazer"){e="Escape 5"}else if(navigator.vendor==="KDE"){e="Konqueror"}else if(document.childNodes&&!document.all&&!navigator.taintEnabled&&!navigator.accentColorName){e="Safari"}else if(document.childNodes&&!document.all&&!navigator.taintEnabled&&navigator.accentColorName){e="OmniWeb 4.5+"}else if(navigator.__ice_version){e="ICEBrowser"}else if(window.ScriptEngine&&ScriptEngine().indexOf("InScript")+1&&document.createElement){e="iCab 3+"}else if(window.ScriptEngine&&ScriptEngine().indexOf("InScript")+1){e="iCab 2-"}else if(t.indexOf("hotjava")+1&&navigator.accentColorName==="undefined"){e="HotJava"}else if(document.layers&&!document.classes){e="Omniweb 4.2-"}else if(document.layers&&!navigator.mimeTypes["*"]){e="Escape 4"}else if(document.layers){e="Netscape 4"}else if(window.opera&&document.getElementsByClassName){e="Opera 9.5+"}else if(window.opera&&window.getComputedStyle){e="Opera 8"}else if(window.opera&&document.childNodes){e="Opera 7"}else if(window.opera){e="Opera "+window.opera.version()}else if(navigator.appName.indexOf("WebTV")+1){e="WebTV"}else if(t.indexOf("netgem")+1){e="Netgem NetBox"}else if(t.indexOf("opentv")+1){e="OpenTV"}else if(t.indexOf("ipanel")+1){e="iPanel MicroBrowser"}else if(document.getElementById&&!document.childNodes){e="Clue browser"}else if(navigator.product&&navigator.product.indexOf("Hv")===0){e="Tkhtml Hv3+"}else if(navigator.product==="Gecko"&&!navigator.savePreferences){e="Gecko engine (Mozilla, Netscape 6+ etc.)"}else if(window.atob){e="Internet Explorer 10+"}else if(XDomainRequest&&window.performance){e="Internet Explorer 9"}else if(XDomainRequest){e="Internet Explorer 8"}else if(document.documentElement&&document.documentElement.style.maxHeight!=="undefined"){e="Internet Explorer 7"}else if(document.compatMode&&document.all){e="Internet Explorer 6"}else if(window.createPopup){e="Internet Explorer 5.5"}else if(window.attachEvent){e="Internet Explorer 5"}else if(document.all&&navigator.appName!=="Microsoft Pocket Internet Explorer"){e="Internet Explorer 4"}else if(t.indexOf("msie")+1&&window.ActiveXObject){e="Pocket Internet Explorer"}else if(document.getElementById&&(t.indexOf("netfront")+1||navigator.appName==="Blazer"||navigator.product==="Gecko"||navigator.appName.indexOf("PSP")+1||navigator.appName.indexOf("PLAYSTATION 3")+1)){e="NetFront 3+"}else if(window.chrome){e="Chrome"}else if(screen.globalStorage){e="Firefox"}n=e;return n}function fingerprint_formfields(){"use strict";var e,t,n,r,i,s,o,u,a;e=0;t=0;n=0;r=0;i="";s=[];o="";u="";a="";i=document.getElementsByTagName("form");n=i.length;s.push("url="+window.location.href);for(e=0;e<n;e=e+1){s.push("FORM="+i[e].name);o=i[e].getElementsByTagName("input");r=o.length;for(t=0;t<r;t=t+1){if(o[t].type!=="hidden"){s.push("Input="+o[t].name)}}}u=s.join("|");a=u;return a}function fingerprint_useragent(){"use strict";var e,t,n,r,i,s;e="";t="";n="";r="";i="";s="";try{i=navigator.userAgent.toLowerCase();n=i.indexOf("opera")>=0;e=i.indexOf("msie")>=0&&!n;t=i.indexOf("mozilla")&&!e&&!n;r=i+glbSep+navigator.platform;if(e){try{r+=glbSep+navigator.cpuClass}catch(o){r+=glbSep+"na"}try{r+=glbSep+navigator.browserLanguage}catch(o){r+=glbSep+"na"}try{r+=glbSep+ScriptEngineBuildVersion()}catch(o){r+=glbSep+"na"}}else if(t){r+=glbSep+navigator.language}s=r;return s}catch(u){return glbOnError}}function fingerprint_os(){"use strict";var e,t,n,r,i;try{e=navigator.userAgent.toLowerCase();t=fingerprint_useragent().toLowerCase();if(e.indexOf("windows nt 6.3")!==-1){n="Windows 8.1"}else if(e.indexOf("windows nt 6.2")!==-1){n="Windows 8"}else if(e.indexOf("windows nt 6.1")!==-1){n="Windows 7"}else if(e.indexOf("windows nt 6.0")!==-1){n="Windows Vista/Windows Server 2008"}else if(e.indexOf("windows nt 5.2")!==-1){n="Windows XP x64/Windows Server 2003"}else if(e.indexOf("windows nt 5.1")!==-1){n="Windows XP"}else if(e.indexOf("windows nt 5.01")!==-1){n="Windows 2000, Service Pack 1 (SP1)"}else if(e.indexOf("windows xp")!==-1){n="Windows XP"}else if(e.indexOf("windows 2000")!==-1){n="Windows 2000"}else if(e.indexOf("windows nt 5.0")!==-1){n="Windows 2000"}else if(e.indexOf("windows nt 4.0")!==-1){n="Windows NT 4.0"}else if(e.indexOf("windows nt")!==-1){n="Windows NT 4.0"}else if(e.indexOf("winnt4.0")!==-1){n="Windows NT 4.0"}else if(e.indexOf("winnt")!==-1){n="Windows NT 4.0"}else if(e.indexOf("windows me")!==-1){n="Windows ME"}else if(e.indexOf("win 9x 4.90")!==-1){n="Windows ME"}else if(e.indexOf("windows 98")!==-1){n="Windows 98"}else if(e.indexOf("win98")!==-1){n="Windows 98"}else if(e.indexOf("windows 95")!==-1){n="Windows 95"}else if(e.indexOf("windows_95")!==-1){n="Windows 95"}else if(e.indexOf("win95")!==-1){n="Windows 95"}else if(e.indexOf("ce")!==-1){n="Windows CE"}else if(e.indexOf("win16")!==-1){n="Windows 3.11"}else if(e.indexOf("iemobile")!==-1){n="Windows Mobile"}else if(e.indexOf("wm5 pie")!==-1){n="Windows Mobile"}else if(e.indexOf("windows")!==-1){n="Windows (Unknown Version)"}else if(e.indexOf("openbsd")!==-1){n="Open BSD"}else if(e.indexOf("sunos")!==-1){n="Sun OS"}else if(e.indexOf("ubuntu")!==-1){n="Ubuntu"}else if(e.indexOf("ipad")!==-1){n="iOS (iPad)"}else if(e.indexOf("ipod")!==-1){n="iOS (iTouch)"}else if(e.indexOf("iphone")!==-1){n="iOS (iPhone)"}else if(e.indexOf("mac os x beta")!==-1){n="Mac OSX Beta (Kodiak)"}else if(e.indexOf("mac os x 10.0")!==-1){n="Mac OSX Cheetah"}else if(e.indexOf("mac os x 10.1")!==-1){n="Mac OSX Puma"}else if(e.indexOf("mac os x 10.2")!==-1){n="Mac OSX Jaguar"}else if(e.indexOf("mac os x 10.3")!==-1){n="Mac OSX Panther"}else if(e.indexOf("mac os x 10.4")!==-1){n="Mac OSX Tiger"}else if(e.indexOf("mac os x 10.5")!==-1){n="Mac OSX Leopard"}else if(e.indexOf("mac os x 10.6")!==-1){n="Mac OSX Snow Leopard"}else if(e.indexOf("mac os x 10.7")!==-1){n="Mac OSX Lion"}else if(e.indexOf("mac os x")!==-1){n="Mac OSX (Version Unknown)"}else if(e.indexOf("mac_68000")!==-1){n="Mac OS Classic (68000)"}else if(e.indexOf("68K")!==-1){n="Mac OS Classic (68000)"}else if(e.indexOf("mac_powerpc")!==-1){n="Mac OS Classic (PowerPC)"}else if(e.indexOf("ppc mac")!==-1){n="Mac OS Classic (PowerPC)"}else if(e.indexOf("macintosh")!==-1){n="Mac OS Classic"}else if(e.indexOf("googletv")!==-1){n="Android (GoogleTV)"}else if(e.indexOf("xoom")!==-1){n="Android (Xoom)"}else if(e.indexOf("htc_flyer")!==-1){n="Android (HTC Flyer)"}else if(e.indexOf("android")!==-1){n="Android"}else if(e.indexOf("symbian")!==-1){n="Symbian"}else if(e.indexOf("series60")!==-1){n="Symbian (Series 60)"}else if(e.indexOf("series70")!==-1){n="Symbian (Series 70)"}else if(e.indexOf("series80")!==-1){n="Symbian (Series 80)"}else if(e.indexOf("series90")!==-1){n="Symbian (Series 90)"}else if(e.indexOf("x11")!==-1){n="UNIX"}else if(e.indexOf("nix")!==-1){n="UNIX"}else if(e.indexOf("linux")!==-1){n="Linux"}else if(e.indexOf("qnx")!==-1){n="QNX"}else if(e.indexOf("os/2")!==-1){n="IBM OS/2"}else if(e.indexOf("beos")!==-1){n="BeOS"}else if(e.indexOf("blackberry95")!==-1){n="Blackberry (Storm 1/2)"}else if(e.indexOf("blackberry97")!==-1){n="Blackberry (Bold)"}else if(e.indexOf("blackberry96")!==-1){n="Blackberry (Tour)"}else if(e.indexOf("blackberry89")!==-1){n="Blackberry (Curve 2)"}else if(e.indexOf("blackberry98")!==-1){n="Blackberry (Torch)"}else if(e.indexOf("playbook")!==-1){n="Blackberry (Playbook)"}else if(e.indexOf("wnd.rim")!==-1){n="Blackberry (IE/FF Emulator)"}else if(e.indexOf("blackberry")!==-1){n="Blackberry"}else if(e.indexOf("palm")!==-1){n="Palm OS"}else if(e.indexOf("webos")!==-1){n="WebOS"}else if(e.indexOf("hpwos")!==-1){n="WebOS (HP)"}else if(e.indexOf("blazer")!==-1){n="Palm OS (Blazer)"}else if(e.indexOf("xiino")!==-1){n="Palm OS (Xiino)"}else if(e.indexOf("kindle")!==-1){n="Kindle"}else if(e.indexOf("wii")!==-1){n="Nintendo (Wii)"}else if(e.indexOf("nintendo ds")!==-1){n="Nintendo (DS)"}else if(e.indexOf("playstation 3")!==-1){n="Sony (Playstation Console)"}else if(e.indexOf("playstation portable")!==-1){n="Sony (Playstation Portable)"}else if(e.indexOf("webtv")!==-1){n="MSN TV (WebTV)"}else if(e.indexOf("inferno")!==-1){n="Inferno"}else{n="Unknown"}if(t.indexOf("x64")!==-1){r="64 bits"}else if(t.indexOf("wow64")!==-1){r="64 bits"}else if(t.indexOf("win64")!==-1){r="64 bits"}else if(t.indexOf("win32")!==-1){r="32 bits"}else if(t.indexOf("x64")!==-1){r="64 bits"}else if(t.indexOf("x32")!==-1){r="32 bits"}else if(t.indexOf("x86")!==-1){r="32 bits*"}else if(t.indexOf("ppc")!==-1){r="64 bits"}else if(t.indexOf("alpha")!==-1){r="64 bits"}else if(t.indexOf("68k")!==-1){r="64 bits"}else if(t.indexOf("iphone")!==-1){r="32 bits"}else if(t.indexOf("android")!==-1){r="32 bits"}else{r="Unknown"}i=n+glbSep+r;return i}catch(s){return glbOnError}}function fingerprint_silverlight(){"use strict";var e,t,n,r;try{try{e=new ActiveXObject("AgControl.AgControl");if(e.IsVersionSupported("5.0")){n="5.x"}else if(e.IsVersionSupported("4.0")){n="4.x"}else if(e.IsVersionSupported("3.0")){n="3.x"}else if(e.IsVersionSupported("2.0")){n="2.x"}else{n="1.x"}e=null}catch(i){t=navigator.plugins["Silverlight Plug-In"];if(t){if(t.description==="1.0.30226.2"){n="2.x"}else{n=parseInt(t.description[0],10)}}else{n="Not Installed"}}r=n;return r}catch(s){return glbOnError}}function fingerprint_fonts(){try{var e="position: absolute; visibility: hidden; display: block !important";var t=["Abadi MT Condensed Light","Adobe Fangsong Std","Adobe Hebrew","Adobe Ming Std","Agency FB","Aharoni","Andalus","Angsana New","AngsanaUPC","Aparajita","Arab","Arabic Transparent","Arabic Typesetting","Arial Baltic","Arial Black","Arial CE","Arial CYR","Arial Greek","Arial TUR","Arial","Batang","BatangChe","Bauhaus 93","Bell MT","Bitstream Vera Serif","Bodoni MT","Bookman Old Style","Braggadocio","Broadway","Browallia New","BrowalliaUPC","Calibri Light","Calibri","Californian FB","Cambria Math","Cambria","Candara","Castellar","Casual","Centaur","Century Gothic","Chalkduster","Colonna MT","Comic Sans MS","Consolas","Constantia","Copperplate Gothic Light","Corbel","Cordia New","CordiaUPC","Courier New Baltic","Courier New CE","Courier New CYR","Courier New Greek","Courier New TUR","Courier New","DFKai-SB","DaunPenh","David","DejaVu LGC Sans Mono","Desdemona","DilleniaUPC","DokChampa","Dotum","DotumChe","Ebrima","Engravers MT","Eras Bold ITC","Estrangelo Edessa","EucrosiaUPC","Euphemia","Eurostile","FangSong","Forte","FrankRuehl","Franklin Gothic Heavy","Franklin Gothic Medium","FreesiaUPC","French Script MT","Gabriola","Gautami","Georgia","Gigi","Gisha","Goudy Old Style","Gulim","GulimChe","GungSeo","Gungsuh","GungsuhChe","Haettenschweiler","Harrington","Hei S","HeiT","Heisei Kaku Gothic","Hiragino Sans GB","Impact","Informal Roman","IrisUPC","Iskoola Pota","JasmineUPC","KacstOne","KaiTi","Kalinga","Kartika","Khmer UI","Kino MT","KodchiangUPC","Kokila","Kozuka Gothic Pr6N","Lao UI","Latha","Leelawadee","Levenim MT","LilyUPC","Lohit Gujarati","Loma","Lucida Bright","Lucida Console","Lucida Fax","Lucida Sans Unicode","MS Gothic","MS Mincho","MS PGothic","MS PMincho","MS Reference Sans Serif","MS UI Gothic","MV Boli","Magneto","Malgun Gothic","Mangal","Marlett","Matura MT Script Capitals","Meiryo UI","Meiryo","Menlo","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Sans Serif","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU-ExtB","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","Miriam Fixed","Miriam","Mongolian Baiti","MoolBoran","NSimSun","Narkisim","News Gothic MT","Niagara Solid","Nyala","PMingLiU","PMingLiU-ExtB","Palace Script MT","Palatino Linotype","Papyrus","Perpetua","Plantagenet Cherokee","Playbill","Prelude Bold","Prelude Condensed Bold","Prelude Condensed Medium","Prelude Medium","PreludeCompressedWGL Black","PreludeCompressedWGL Bold","PreludeCompressedWGL Light","PreludeCompressedWGL Medium","PreludeCondensedWGL Black","PreludeCondensedWGL Bold","PreludeCondensedWGL Light","PreludeCondensedWGL Medium","PreludeWGL Black","PreludeWGL Bold","PreludeWGL Light","PreludeWGL Medium","Raavi","Rachana","Rockwell","Rod","Sakkal Majalla","Sawasdee","Script MT Bold","Segoe Print","Segoe Script","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Segoe UI","Shonar Bangla","Showcard Gothic","Shruti","SimHei","SimSun","SimSun-ExtB","Simplified Arabic Fixed","Simplified Arabic","Snap ITC","Sylfaen","Symbol","Tahoma","Times New Roman Baltic","Times New Roman CE","Times New Roman CYR","Times New Roman Greek","Times New Roman TUR","Times New Roman","TlwgMono","Traditional Arabic","Trebuchet MS","Tunga","Tw Cen MT Condensed Extra Bold","Ubuntu","Umpush","Univers","Utopia","Utsaah","Vani","Verdana","Vijaya","Vladimir Script","Vrinda","Webdings","Wide Latin","Wingdings"];var n=t.length;var r="<b style=\"display:inline !important; width:auto !important; font:normal 10px/1 'X',sans-serif !important\">ww</b>"+"<b style=\"display:inline !important; width:auto !important; font:normal 10px/1 'X',monospace !important\">ww</b>";var i=document.createDocumentFragment();var s=[];for(var o=0;o<n;o++){var u=t[o];var a=document.createElement("div");u=u.replace(/['"<>]/g,"");a.innerHTML=r.replace(/X/g,u);a.style.cssText=e;i.appendChild(a);s.push(a)}var f=document.body;f.insertBefore(i,f.firstChild);result=[];for(var o=0;o<n;o++){var l=s[o].getElementsByTagName("b");if(l[0].offsetWidth===l[1].offsetWidth){result.push(t[o])}}for(var o=0;o<n;o++){f.removeChild(s[o])}return result.join("|")}catch(c){return glbOnError}}function fingerprint_browser(){"use strict";var e,t,n,r;try{e=navigator.userAgent.toLowerCase();if(/msie (\d+\.\d+);/.test(e)){t=Number(RegExp.$1);if(e.indexOf("trident/6")>-1){t=10}if(e.indexOf("trident/5")>-1){t=9}if(e.indexOf("trident/4")>-1){t=8}n="Internet Explorer "+t}else if(/firefox[\/\s](\d+\.\d+)/.test(e)){t=Number(RegExp.$1);n="Firefox "+t}else if(/opera[\/\s](\d+\.\d+)/.test(e)){t=Number(RegExp.$1);n="Opera "+t}else if(/chrome[\/\s](\d+\.\d+)/.test(e)){t=Number(RegExp.$1);n="Chrome "+t}else if(/version[\/\s](\d+\.\d+)/.test(e)){t=Number(RegExp.$1);n="Safari "+t}else if(/rv[\/\s](\d+\.\d+)/.test(e)){t=Number(RegExp.$1);n="Mozilla "+t}else if(/mozilla[\/\s](\d+\.\d+)/.test(e)){t=Number(RegExp.$1);n="Mozilla "+t}else if(/binget[\/\s](\d+\.\d+)/.test(e)){t=Number(RegExp.$1);n="Library (BinGet) "+t}else if(/curl[\/\s](\d+\.\d+)/.test(e)){t=Number(RegExp.$1);n="Library (cURL) "+t}else if(/java[\/\s](\d+\.\d+)/.test(e)){t=Number(RegExp.$1);n="Library (Java) "+t}else if(/libwww-perl[\/\s](\d+\.\d+)/.test(e)){t=Number(RegExp.$1);n="Library (libwww-perl) "+t}else if(/microsoft url control -[\s](\d+\.\d+)/.test(e)){t=Number(RegExp.$1);n="Library (Microsoft URL Control) "+t}else if(/peach[\/\s](\d+\.\d+)/.test(e)){t=Number(RegExp.$1);n="Library (Peach) "+t}else if(/php[\/\s](\d+\.\d+)/.test(e)){t=Number(RegExp.$1);n="Library (PHP) "+t}else if(/pxyscand[\/\s](\d+\.\d+)/.test(e)){t=Number(RegExp.$1);n="Library (pxyscand) "+t}else if(/pycurl[\/\s](\d+\.\d+)/.test(e)){t=Number(RegExp.$1);n="Library (PycURL) "+t}else if(/python-urllib[\/\s](\d+\.\d+)/.test(e)){t=Number(RegExp.$1);n="Library (Python URLlib) "+t}else if(/appengine-google/.test(e)){t=Number(RegExp.$1);n="Cloud (Google AppEngine) "+t}else{n="Unknown"}r=n;return r}catch(i){return glbOnError}}function fingerprint_java(){"use strict";var e,t;try{e=navigator.javaEnabled()?1:0;t=e;return t}catch(n){return glbOnError}}function fingerprint_touch(){"use strict";var e,t;try{if(document.createEvent("TouchEvent")){e=1;t=e}else{e=0;t=e}return t}catch(n){e=0;t=e;return t}}function fingerprint_cookie(){"use strict";var e,t,n;try{e=navigator.cookieEnabled?1:0;t=typeof navigator.cookieEnabled;if(t==="undefined"&&!e){document.cookie="testcookie";e=document.cookie.indexOf("testcookie")!==-1?1:0}n=e;return n}catch(r){return glbOnError}}function fingerprint_connection(){"use strict";var e,t;try{e=navigator.connection.type;t=e}catch(n){t="Unknown"}return t}function fingerprint_latency(){"use strict";var e,t,n,r,i;try{e=window.performance.timing;r=e.responseStart-e.requestStart;i=e.responseEnd-e.fetchStart;return r+"|"+i}catch(s){return"Unknown"}}function fingerprint_timezone(){"use strict";var e,t,n,r;try{e=new Date;t=e.getTimezoneOffset();n=t/60*-1;r=n;return r}catch(i){return glbOnError}}function fingerprint_language(){"use strict";var e,t,n,r,i,s;try{t=typeof navigator.language;n=typeof navigator.browserLanguage;r=typeof navigator.systemLanguage;i=typeof navigator.userLanguage;if(t!=="undefined"){e="lang"+glbPair+navigator.language+glbSep}else if(n!=="undefined"){e="lang"+glbPair+navigator.browserLanguage+glbSep}else{e="lang"+glbPair+glbSep}if(r!=="undefined"){e+="syslang"+glbPair+navigator.systemLanguage+glbSep}else{e+="syslang"+glbPair+glbSep}if(i!=="undefined"){e+="userlang"+glbPair+navigator.userLanguage}else{e+="userlang"+glbPair}s=e;return s}catch(o){return glbOnError}}function fingerprint_display(){"use strict";var e,t,n,r,i,s,o,u,a,f;t=window.screen;a="";if(typeof screen.fontSmoothingEnabled!=="undefined"){e=screen.fontSmoothingEnabled}else{try{n=document.createElement("canvas");n.width="35";n.height="35";n.style.display="none";document.body.appendChild(n);r=n.getContext("2d");r.textBaseline="top";r.font="32px Arial";r.fillStyle="black";r.strokeStyle="black";r.fillText("O",0,0);for(s=8;s<=32;s=s+1){for(i=1;i<=32;i=i+1){o=r.getImageData(i,s,1,1).data;u=o[3];if(u!==255&&u!==0){e="True"}}}e="False"}catch(l){e="Undefined"}}try{if(t){a+=t.colorDepth+glbSep+t.width+glbSep+t.height+glbSep+t.availWidth+glbSep+t.availHeight}f=a+glbSep+"fs"+glbPair+e;return f}catch(l){return glbOnError}}function fingerprint_flash(){"use strict";var e,t,n;try{e=swfobject.getFlashPlayerVersion();t=e.major+"."+e.minor+"."+e.release;if(t==="0.0.0"){t="Not Installed"}n=t;return n}catch(r){return"Not Installed"}}function fingerprint_plugins(){"use strict";var e,t,n,r,i,s,o,u,a;try{e=new Hashtable;e.put("7790769C-0471-11D2-AF11-00C04FA35D02","abk");e.put("89820200-ECBD-11CF-8B85-00AA005B4340","wnt");e.put("47F67D00-9E55-11D1-BAEF-00C04FC2D130","aol");e.put("76C19B38-F0C8-11CF-87CC-0020AFEECF20","arb");e.put("76C19B34-F0C8-11CF-87CC-0020AFEECF20","chs");e.put("76C19B33-F0C8-11CF-87CC-0020AFEECF20","cht");e.put("9381D8F2-0288-11D0-9501-00AA00B911A5","dht");e.put("4F216970-C90C-11D1-B5C7-0000F8051515","dhj");e.put("283807B5-2C60-11D0-A31D-00AA00B92C03","dan");e.put("44BBA848-CC51-11CF-AAFA-00AA00B6015C","dsh");e.put("76C19B36-F0C8-11CF-87CC-0020AFEECF20","heb");e.put("89820200-ECBD-11CF-8B85-00AA005B4383","ie5");e.put("5A8D6EE0-3E18-11D0-821E-444553540000","icw");e.put("630B1DA0-B465-11D1-9948-00C04F98BBC9","ibe");e.put("08B0E5C0-4FCB-11CF-AAA5-00401C608555","iec");e.put("45EA75A0-A269-11D1-B5BF-0000F8051515","ieh");e.put("DE5AED00-A4BF-11D1-9948-00C04F98BBC9","iee");e.put("76C19B30-F0C8-11CF-87CC-0020AFEECF20","jap");e.put("76C19B31-F0C8-11CF-87CC-0020AFEECF20","krn");e.put("76C19B50-F0C8-11CF-87CC-0020AFEECF20","lan");e.put("D27CDB6E-AE6D-11CF-96B8-444553540000","swf");e.put("2A202491-F00D-11CF-87CC-0020AFEECF20","shw");e.put("5945C046-LE7D-LLDL-BC44-00C04FD912BE","msn");e.put("22D6F312-B0F6-11D0-94AB-0080C74C7E95","wmp");e.put("3AF36230-A269-11D1-B5BF-0000F8051515","obp");e.put("44BBA840-CC51-11CF-AAFA-00AA00B6015C","oex");e.put("44BBA842-CC51-11CF-AAFA-00AA00B6015B","net");e.put("76C19B32-F0C8-11CF-87CC-0020AFEECF20","pan");e.put("76C19B35-F0C8-11CF-87CC-0020AFEECF20","thi");e.put("CC2A9BA0-3BDD-11D0-821E-444553540000","tks");e.put("3BF42070-B3B1-11D1-B5C5-0000F8051515","uni");e.put("10072CEC-8CC1-11D1-986E-00A0C955B42F","vtc");e.put("76C19B37-F0C8-11CF-87CC-0020AFEECF20","vnm");e.put("08B0E5C0-4FCB-11CF-AAA5-00401C608500","mvm");e.put("4F645220-306D-11D2-995D-00C04F98BBC9","vbs");e.put("73FA19D0-2D75-11D2-995D-00C04F98BBC9","wfd");e.put("6BF52A52-394A-11D3-B153-00C04F79FAA6","wmq");e.put("9030D464-4C02-4ABF-8ECC-5164760863C6","mlv");e.put("DE4AF3B0-F4D4-11D3-B41A-0050DA2E6C21","qtc");e.put("4063BE15-3B08-470D-A0D5-B37161CFFD69","aqt");e.put("3049C3E9-B461-4BC5-8870-4C09146192CA","rpd");e.put("238F6F83-B8B4-11CF-8771-00A024541EE3","ica");e.put("90E2BA2E-DD1B-4CDE-9134-7A8B86D33CA7","wex");i="";s=true;if(navigator.plugins.length>0){for(o=0;o<navigator.plugins.length;o=o+1){if(s===true){i+=navigator.plugins[o].name;s=false}else{i+=glbSep+navigator.plugins[o].name}}}else if(navigator.mimeTypes.length>0){u=navigator.mimeTypes;for(o=0;o<u.length;o=o+1){if(s===true){i+=u[o].description;s=false}else{i+=glbSep+u[o].description}}}else{document.body.addBehavior("#default#clientCaps");t=e.keys();for(o=0;o<e.size();o=o+1){r=activeXDetect(t[o]);n=e.get(t[o]);if(r){if(s===true){i=n+glbPair+r;s=false}else{i+=glbSep+n+glbPair+r}}}i=i.replace(/,/g,".")}i=stripIllegalChars(i);if(i===""){i="None"}a=i;return a}catch(f){return glbOnError}}function setTntCookie(e,t,n){"use strict";var r,i;try{r=new Date;r.setDate(r.getDate()+n);i=escape(t)+(n===null?"":"; expires="+r.toUTCString())+ "; domain=websitebuilder.com;path=/";document.cookie=e+"="+i}catch(s){return glbOnError}}function getCookie(e){"use strict";var t,n,r;try{t=document.cookie;n=t.indexOf(" "+e+"=");if(n===-1){n=t.indexOf(e+"=")}if(n===-1){t=null}else{n=t.indexOf("=",n)+1;r=t.indexOf(";",n);if(r===-1){r=t.length}t=unescape(t.substring(n,r))}return t}catch(i){return glbOnError}}function fingerprint_hash(){"use strict";var e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x;try{e=fingerprint_useragent();t=fingerprint_truebrowser();n=fingerprint_browser();r=fingerprint_os();i=fingerprint_display();s=fingerprint_touch();o=fingerprint_connection();u=fingerprint_timezone();a=fingerprint_language();f=fingerprint_plugins();l=fingerprint_flash();c=fingerprint_silverlight();h=fingerprint_java();p=fingerprint_cookie();d=fingerprint_fonts();v=md5(e+t+n+r);m=md5(e+i+s+o);g=md5(u+a);y=md5(f);b=md5(l+c+h+p+d);S=md5(e+t+n+r+i+s+p+u+a+f+l+c+h+p+d);w=S+glbSep+v+glbSep+m+glbSep+g+glbSep+y+glbSep+b;E=getCookie("fingerprint");if(E===null){setTntCookie("fingerprint",w,365);x="new"+glbPair+w}if(E===w){setTntCookie("fingerprint",w,365);x="existing"+glbPair+w}if(E!==w){setTntCookie("fingerprint",w,365);x="replace"+glbPair+E+"/"+w}return x}catch(T){return glbOnError}}var glbSep,glbPair,glbFlashVersion,glbOnError,glbOutputMode;glbSep="|";glbPair="=";glbFlashVersion="";glbOnError="error"

function md5cycle(e,t){var n=e[0],r=e[1],i=e[2],s=e[3];n=ff(n,r,i,s,t[0],7,-680876936);s=ff(s,n,r,i,t[1],12,-389564586);i=ff(i,s,n,r,t[2],17,606105819);r=ff(r,i,s,n,t[3],22,-1044525330);n=ff(n,r,i,s,t[4],7,-176418897);s=ff(s,n,r,i,t[5],12,1200080426);i=ff(i,s,n,r,t[6],17,-1473231341);r=ff(r,i,s,n,t[7],22,-45705983);n=ff(n,r,i,s,t[8],7,1770035416);s=ff(s,n,r,i,t[9],12,-1958414417);i=ff(i,s,n,r,t[10],17,-42063);r=ff(r,i,s,n,t[11],22,-1990404162);n=ff(n,r,i,s,t[12],7,1804603682);s=ff(s,n,r,i,t[13],12,-40341101);i=ff(i,s,n,r,t[14],17,-1502002290);r=ff(r,i,s,n,t[15],22,1236535329);n=gg(n,r,i,s,t[1],5,-165796510);s=gg(s,n,r,i,t[6],9,-1069501632);i=gg(i,s,n,r,t[11],14,643717713);r=gg(r,i,s,n,t[0],20,-373897302);n=gg(n,r,i,s,t[5],5,-701558691);s=gg(s,n,r,i,t[10],9,38016083);i=gg(i,s,n,r,t[15],14,-660478335);r=gg(r,i,s,n,t[4],20,-405537848);n=gg(n,r,i,s,t[9],5,568446438);s=gg(s,n,r,i,t[14],9,-1019803690);i=gg(i,s,n,r,t[3],14,-187363961);r=gg(r,i,s,n,t[8],20,1163531501);n=gg(n,r,i,s,t[13],5,-1444681467);s=gg(s,n,r,i,t[2],9,-51403784);i=gg(i,s,n,r,t[7],14,1735328473);r=gg(r,i,s,n,t[12],20,-1926607734);n=hh(n,r,i,s,t[5],4,-378558);s=hh(s,n,r,i,t[8],11,-2022574463);i=hh(i,s,n,r,t[11],16,1839030562);r=hh(r,i,s,n,t[14],23,-35309556);n=hh(n,r,i,s,t[1],4,-1530992060);s=hh(s,n,r,i,t[4],11,1272893353);i=hh(i,s,n,r,t[7],16,-155497632);r=hh(r,i,s,n,t[10],23,-1094730640);n=hh(n,r,i,s,t[13],4,681279174);s=hh(s,n,r,i,t[0],11,-358537222);i=hh(i,s,n,r,t[3],16,-722521979);r=hh(r,i,s,n,t[6],23,76029189);n=hh(n,r,i,s,t[9],4,-640364487);s=hh(s,n,r,i,t[12],11,-421815835);i=hh(i,s,n,r,t[15],16,530742520);r=hh(r,i,s,n,t[2],23,-995338651);n=ii(n,r,i,s,t[0],6,-198630844);s=ii(s,n,r,i,t[7],10,1126891415);i=ii(i,s,n,r,t[14],15,-1416354905);r=ii(r,i,s,n,t[5],21,-57434055);n=ii(n,r,i,s,t[12],6,1700485571);s=ii(s,n,r,i,t[3],10,-1894986606);i=ii(i,s,n,r,t[10],15,-1051523);r=ii(r,i,s,n,t[1],21,-2054922799);n=ii(n,r,i,s,t[8],6,1873313359);s=ii(s,n,r,i,t[15],10,-30611744);i=ii(i,s,n,r,t[6],15,-1560198380);r=ii(r,i,s,n,t[13],21,1309151649);n=ii(n,r,i,s,t[4],6,-145523070);s=ii(s,n,r,i,t[11],10,-1120210379);i=ii(i,s,n,r,t[2],15,718787259);r=ii(r,i,s,n,t[9],21,-343485551);e[0]=add32(n,e[0]);e[1]=add32(r,e[1]);e[2]=add32(i,e[2]);e[3]=add32(s,e[3])}function cmn(e,t,n,r,i,s){t=add32(add32(t,e),add32(r,s));return add32(t<<i|t>>>32-i,n)}function ff(e,t,n,r,i,s,o){return cmn(t&n|~t&r,e,t,i,s,o)}function gg(e,t,n,r,i,s,o){return cmn(t&r|n&~r,e,t,i,s,o)}function hh(e,t,n,r,i,s,o){return cmn(t^n^r,e,t,i,s,o)}function ii(e,t,n,r,i,s,o){return cmn(n^(t|~r),e,t,i,s,o)}function md51(e){txt="";var t=e.length,n=[1732584193,-271733879,-1732584194,271733878],r;for(r=64;r<=e.length;r+=64){md5cycle(n,md5blk(e.substring(r-64,r)))}e=e.substring(r-64);var i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(r=0;r<e.length;r++)i[r>>2]|=e.charCodeAt(r)<<(r%4<<3);i[r>>2]|=128<<(r%4<<3);if(r>55){md5cycle(n,i);for(r=0;r<16;r++)i[r]=0}i[14]=t*8;md5cycle(n,i);return n}function md5blk(e){var t=[],n;for(n=0;n<64;n+=4){t[n>>2]=e.charCodeAt(n)+(e.charCodeAt(n+1)<<8)+(e.charCodeAt(n+2)<<16)+(e.charCodeAt(n+3)<<24)}return t}function rhex(e){var t="",n=0;for(;n<4;n++)t+=hex_chr[e>>n*8+4&15]+hex_chr[e>>n*8&15];return t}function hex(e){for(var t=0;t<e.length;t++)e[t]=rhex(e[t]);return e.join("")}function md5(e){return hex(md51(e))}function add32(e,t){return e+t&4294967295}var hex_chr="0123456789abcdef".split("");if(md5("hello")!="5d41402abc4b2a76b9719d911017c592"){function add32(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}}

/*	SWFObject v2.2 <http://code.google.com/p/swfobject/>
 is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */
var swfobject=function(){function A(){if(!t){try{var a=i.getElementsByTagName("body")[0].appendChild(Q("span"));a.parentNode.removeChild(a)}catch(b){return}t=!0;for(var c=l.length,d=0;c>d;d++)l[d]()}}function B(a){t?a():l[l.length]=a}function C(b){if(typeof h.addEventListener!=a)h.addEventListener("load",b,!1);else if(typeof i.addEventListener!=a)i.addEventListener("load",b,!1);else if(typeof h.attachEvent!=a)R(h,"onload",b);else if("function"==typeof h.onload){var c=h.onload;h.onload=function(){c(),b()}}else h.onload=b}function D(){k?E():F()}function E(){var c=i.getElementsByTagName("body")[0],d=Q(b);d.setAttribute("type",e);var f=c.appendChild(d);if(f){var g=0;!function(){if(typeof f.GetVariable!=a){var b=f.GetVariable("$version");b&&(b=b.split(" ")[1].split(","),y.pv=[parseInt(b[0],10),parseInt(b[1],10),parseInt(b[2],10)])}else if(10>g)return g++,setTimeout(arguments.callee,10),void 0;c.removeChild(d),f=null,F()}()}else F()}function F(){var b=m.length;if(b>0)for(var c=0;b>c;c++){var d=m[c].id,e=m[c].callbackFn,f={success:!1,id:d};if(y.pv[0]>0){var g=P(d);if(g)if(!S(m[c].swfVersion)||y.wk&&y.wk<312)if(m[c].expressInstall&&H()){var h={};h.data=m[c].expressInstall,h.width=g.getAttribute("width")||"0",h.height=g.getAttribute("height")||"0",g.getAttribute("class")&&(h.styleclass=g.getAttribute("class")),g.getAttribute("align")&&(h.align=g.getAttribute("align"));for(var i={},j=g.getElementsByTagName("param"),k=j.length,l=0;k>l;l++)"movie"!=j[l].getAttribute("name").toLowerCase()&&(i[j[l].getAttribute("name")]=j[l].getAttribute("value"));I(h,i,d,e)}else J(g),e&&e(f);else U(d,!0),e&&(f.success=!0,f.ref=G(d),e(f))}else if(U(d,!0),e){var n=G(d);n&&typeof n.SetVariable!=a&&(f.success=!0,f.ref=n),e(f)}}}function G(c){var d=null,e=P(c);if(e&&"OBJECT"==e.nodeName)if(typeof e.SetVariable!=a)d=e;else{var f=e.getElementsByTagName(b)[0];f&&(d=f)}return d}function H(){return!u&&S("6.0.65")&&(y.win||y.mac)&&!(y.wk&&y.wk<312)}function I(b,c,d,e){u=!0,r=e||null,s={success:!1,id:d};var g=P(d);if(g){"OBJECT"==g.nodeName?(p=K(g),q=null):(p=g,q=d),b.id=f,(typeof b.width==a||!/%$/.test(b.width)&&parseInt(b.width,10)<310)&&(b.width="310"),(typeof b.height==a||!/%$/.test(b.height)&&parseInt(b.height,10)<137)&&(b.height="137"),i.title=i.title.slice(0,47)+" - Flash Player Installation";var j=y.ie&&y.win?"ActiveX":"PlugIn",k="MMredirectURL="+h.location.toString().replace(/&/g,"%26")+"&MMplayerType="+j+"&MMdoctitle="+i.title;if(typeof c.flashvars!=a?c.flashvars+="&"+k:c.flashvars=k,y.ie&&y.win&&4!=g.readyState){var l=Q("div");d+="SWFObjectNew",l.setAttribute("id",d),g.parentNode.insertBefore(l,g),g.style.display="none",function(){4==g.readyState?g.parentNode.removeChild(g):setTimeout(arguments.callee,10)}()}L(b,c,d)}}function J(a){if(y.ie&&y.win&&4!=a.readyState){var b=Q("div");a.parentNode.insertBefore(b,a),b.parentNode.replaceChild(K(a),b),a.style.display="none",function(){4==a.readyState?a.parentNode.removeChild(a):setTimeout(arguments.callee,10)}()}else a.parentNode.replaceChild(K(a),a)}function K(a){var c=Q("div");if(y.win&&y.ie)c.innerHTML=a.innerHTML;else{var d=a.getElementsByTagName(b)[0];if(d){var e=d.childNodes;if(e)for(var f=e.length,g=0;f>g;g++)1==e[g].nodeType&&"PARAM"==e[g].nodeName||8==e[g].nodeType||c.appendChild(e[g].cloneNode(!0))}}return c}function L(c,d,f){var g,h=P(f);if(y.wk&&y.wk<312)return g;if(h)if(typeof c.id==a&&(c.id=f),y.ie&&y.win){var i="";for(var j in c)c[j]!=Object.prototype[j]&&("data"==j.toLowerCase()?d.movie=c[j]:"styleclass"==j.toLowerCase()?i+=' class="'+c[j]+'"':"classid"!=j.toLowerCase()&&(i+=" "+j+'="'+c[j]+'"'));var k="";for(var l in d)d[l]!=Object.prototype[l]&&(k+='<param name="'+l+'" value="'+d[l]+'" />');h.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+i+">"+k+"</object>",n[n.length]=c.id,g=P(c.id)}else{var m=Q(b);m.setAttribute("type",e);for(var o in c)c[o]!=Object.prototype[o]&&("styleclass"==o.toLowerCase()?m.setAttribute("class",c[o]):"classid"!=o.toLowerCase()&&m.setAttribute(o,c[o]));for(var p in d)d[p]!=Object.prototype[p]&&"movie"!=p.toLowerCase()&&M(m,p,d[p]);h.parentNode.replaceChild(m,h),g=m}return g}function M(a,b,c){var d=Q("param");d.setAttribute("name",b),d.setAttribute("value",c),a.appendChild(d)}function N(a){var b=P(a);b&&"OBJECT"==b.nodeName&&(y.ie&&y.win?(b.style.display="none",function(){4==b.readyState?O(a):setTimeout(arguments.callee,10)}()):b.parentNode.removeChild(b))}function O(a){var b=P(a);if(b){for(var c in b)"function"==typeof b[c]&&(b[c]=null);b.parentNode.removeChild(b)}}function P(a){var b=null;try{b=i.getElementById(a)}catch(c){}return b}function Q(a){return i.createElement(a)}function R(a,b,c){a.attachEvent(b,c),o[o.length]=[a,b,c]}function S(a){var b=y.pv,c=a.split(".");return c[0]=parseInt(c[0],10),c[1]=parseInt(c[1],10)||0,c[2]=parseInt(c[2],10)||0,b[0]>c[0]||b[0]==c[0]&&b[1]>c[1]||b[0]==c[0]&&b[1]==c[1]&&b[2]>=c[2]?!0:!1}function T(c,d,e,f){if(!y.ie||!y.mac){var g=i.getElementsByTagName("head")[0];if(g){var h=e&&"string"==typeof e?e:"screen";if(f&&(v=null,w=null),!v||w!=h){var j=Q("style");j.setAttribute("type","text/css"),j.setAttribute("media",h),v=g.appendChild(j),y.ie&&y.win&&typeof i.styleSheets!=a&&i.styleSheets.length>0&&(v=i.styleSheets[i.styleSheets.length-1]),w=h}y.ie&&y.win?v&&typeof v.addRule==b&&v.addRule(c,d):v&&typeof i.createTextNode!=a&&v.appendChild(i.createTextNode(c+" {"+d+"}"))}}}function U(a,b){if(x){var c=b?"visible":"hidden";t&&P(a)?P(a).style.visibility=c:T("#"+a,"visibility:"+c)}}function V(b){var c=/[\\\"<>\.;]/,d=null!=c.exec(b);return d&&typeof encodeURIComponent!=a?encodeURIComponent(b):b}var p,q,r,s,v,w,a="undefined",b="object",c="Shockwave Flash",d="ShockwaveFlash.ShockwaveFlash",e="application/x-shockwave-flash",f="SWFObjectExprInst",g="onreadystatechange",h=window,i=document,j=navigator,k=!1,l=[D],m=[],n=[],o=[],t=!1,u=!1,x=!0,y=function(){var f=typeof i.getElementById!=a&&typeof i.getElementsByTagName!=a&&typeof i.createElement!=a,g=j.userAgent.toLowerCase(),l=j.platform.toLowerCase(),m=l?/win/.test(l):/win/.test(g),n=l?/mac/.test(l):/mac/.test(g),o=/webkit/.test(g)?parseFloat(g.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,p=!1,q=[0,0,0],r=null;if(typeof j.plugins!=a&&typeof j.plugins[c]==b)r=j.plugins[c].description,!r||typeof j.mimeTypes!=a&&j.mimeTypes[e]&&!j.mimeTypes[e].enabledPlugin||(k=!0,p=!1,r=r.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),q[0]=parseInt(r.replace(/^(.*)\..*$/,"$1"),10),q[1]=parseInt(r.replace(/^.*\.(.*)\s.*$/,"$1"),10),q[2]=/[a-zA-Z]/.test(r)?parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof h.ActiveXObject!=a)try{var s=new ActiveXObject(d);s&&(r=s.GetVariable("$version"),r&&(p=!0,r=r.split(" ")[1].split(","),q=[parseInt(r[0],10),parseInt(r[1],10),parseInt(r[2],10)]))}catch(t){}return{w3:f,pv:q,wk:o,ie:p,win:m,mac:n}}();return function(){y.w3&&((typeof i.readyState!=a&&"complete"==i.readyState||typeof i.readyState==a&&(i.getElementsByTagName("body")[0]||i.body))&&A(),t||(typeof i.addEventListener!=a&&i.addEventListener("DOMContentLoaded",A,!1),y.ie&&y.win&&(i.attachEvent(g,function(){"complete"==i.readyState&&(i.detachEvent(g,arguments.callee),A())}),h==top&&function(){if(!t){try{i.documentElement.doScroll("left")}catch(a){return setTimeout(arguments.callee,0),void 0}A()}}()),y.wk&&function(){return t?void 0:/loaded|complete/.test(i.readyState)?(A(),void 0):(setTimeout(arguments.callee,0),void 0)}(),C(A)))}(),function(){y.ie&&y.win&&window.attachEvent("onunload",function(){for(var a=o.length,b=0;a>b;b++)o[b][0].detachEvent(o[b][1],o[b][2]);for(var c=n.length,d=0;c>d;d++)N(n[d]);for(var e in y)y[e]=null;y=null;for(var f in swfobject)swfobject[f]=null;swfobject=null})}(),{registerObject:function(a,b,c,d){if(y.w3&&a&&b){var e={};e.id=a,e.swfVersion=b,e.expressInstall=c,e.callbackFn=d,m[m.length]=e,U(a,!1)}else d&&d({success:!1,id:a})},getObjectById:function(a){return y.w3?G(a):void 0},embedSWF:function(c,d,e,f,g,h,i,j,k,l){var m={success:!1,id:d};y.w3&&!(y.wk&&y.wk<312)&&c&&d&&e&&f&&g?(U(d,!1),B(function(){e+="",f+="";var n={};if(k&&typeof k===b)for(var o in k)n[o]=k[o];n.data=c,n.width=e,n.height=f;var p={};if(j&&typeof j===b)for(var q in j)p[q]=j[q];if(i&&typeof i===b)for(var r in i)typeof p.flashvars!=a?p.flashvars+="&"+r+"="+i[r]:p.flashvars=r+"="+i[r];if(S(g)){var s=L(n,p,d);n.id==d&&U(d,!0),m.success=!0,m.ref=s}else{if(h&&H())return n.data=h,I(n,p,d,l),void 0;U(d,!0)}l&&l(m)})):l&&l(m)},switchOffAutoHideShow:function(){x=!1},ua:y,getFlashPlayerVersion:function(){return{major:y.pv[0],minor:y.pv[1],release:y.pv[2]}},hasFlashPlayerVersion:S,createSWF:function(a,b,c){return y.w3?L(a,b,c):void 0},showExpressInstall:function(a,b,c,d){y.w3&&H()&&I(a,b,c,d)},removeSWF:function(a){y.w3&&N(a)},createCSS:function(a,b,c,d){y.w3&&T(a,b,c,d)},addDomLoadEvent:B,addLoadEvent:C,getQueryParamValue:function(a){var b=i.location.search||i.location.hash;if(b){if(/\?/.test(b)&&(b=b.split("?")[1]),null==a)return V(b);for(var c=b.split("&"),d=0;d<c.length;d++)if(c[d].substring(0,c[d].indexOf("="))==a)return V(c[d].substring(c[d].indexOf("=")+1))}return""},expressInstallCallback:function(){if(u){var a=P(f);a&&p&&(a.parentNode.replaceChild(p,a),q&&(U(q,!0),y.ie&&y.win&&(p.style.display="block")),r&&r(s)),u=!1}}}}();

function tntFprintHash()
{
  "use strict";
  var fp_ua, fp_tb, fp_br, fp_os, fp_di, fp_to, fp_cn, fp_ti, fp_la, fp_pl, fp_fl, fp_si, fp_ja, fp_fo, strBrowser, strEnvironment, strLocation, strSoftware, strCapabilites, strHash, strCookie, strComplete, strOut;

  try
  {
    fp_ua = fingerprint_useragent();
    fp_tb = fingerprint_truebrowser();
    fp_br = fingerprint_browser();
    fp_os = fingerprint_os();
    fp_di = fingerprint_display();
    fp_to = fingerprint_touch();
    fp_cn = fingerprint_connection();
    fp_ti = fingerprint_timezone();
    fp_la = fingerprint_language();
    fp_pl = fingerprint_plugins();
    fp_fl = fingerprint_flash();
    fp_si = fingerprint_silverlight();
    fp_ja = fingerprint_java();
    fp_fo = fingerprint_fonts();
    strBrowser = md5(fp_ua + fp_tb + fp_br + fp_os);
    strEnvironment = md5(fp_ua + fp_di + fp_to + fp_cn);
    strLocation = md5(fp_ti + fp_la);
    strSoftware = md5(fp_pl);
    strCapabilites = md5(fp_fl + fp_si + fp_ja + fp_fo);
    strComplete = md5(fp_ua + fp_tb + fp_br + fp_os + fp_di + fp_to + fp_ti + fp_la + fp_pl + fp_fl + fp_si + fp_ja + fp_fo);
    strHash = strComplete + glbSep + strBrowser + glbSep + strEnvironment + glbSep + strLocation + glbSep + strSoftware + glbSep + strCapabilites;
    strCookie = getCookie("TNT:FPRINT");
    strOut = '';
    if (strCookie === null)
    {
      setTntCookie("TNT:FPRINT", strHash, 365);
      strOut = "new" + glbPair + strHash;
      tntRequest(strOut);
    }
    else if (strCookie === strHash)
    {
      setTntCookie("TNT:FPRINT", strHash, 365);
      strOut = "existing" + glbPair + strHash;
      if (getCookie('TNT:VID') === null)
      {
        tntRequest(strOut);
      }
    }
    else if (strCookie !== strHash)
    {
      setTntCookie("TNT:FPRINT", strHash, 365);
      strOut = "replace" + glbPair + strCookie + "/" + strHash;
      tntRequest(strOut);
    }

    return strOut;
  }
  catch (err)
  {
    return glbOnError;
  }
}

function tntRequest(send)
{
  var post = send;
  post = post + '&referrer=' + encodeURIComponent(document.referrer);

  var url = 'http://websitebuilder-track.tntaffiliate.com/js/device/device.js';
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr)
  {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open('POST', url, true);
  }
  else if (typeof XDomainRequest != "undefined")
  {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open('POST', url);
  }
  else
  {
    // CORS not supported.
    xhr = null;
  }

  if (!xhr)
  {
    return;
  }

  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onload = function ()
  {
    if (getCookie('TNT:VID') === null)
    {
      var responseParts = xhr.responseText.split('/', 2);
      setTntCookie('TNT:VID', responseParts[1], parseInt(responseParts[0]));
    }
  };

  //these blank handlers need to be set to fix ie9 http://cypressnorth.com/programming/internet-explorer-aborting-ajax-requests-fixed/
  xhr.onprogress = function () { };
  xhr.ontimeout = function () { };

  //do it, wrapped in timeout to fix ie9
  setTimeout(function () { xhr.send(post);}, 0);

}

tntFprintHash();