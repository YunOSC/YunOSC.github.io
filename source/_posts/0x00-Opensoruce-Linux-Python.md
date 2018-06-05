---
title: 0x00 Opensoruce Linux Python
date: 2018-06-04 19:40:09
tags:
slidehtml:
  titleMerge: false
---
## Yuntech Open-Source Club (YunOSC)  

---

我在哪？這裡是什麼地方？你是誰？  

--

## 雲科開源  
~~全校最大的開放原始碼研究社上線啦！！！！~~  
<p align=right><font size=2>痾. 抱歉 只此一間,別無分號 當然最大...</font></p>  

--

## 如果用一句話來概括就是：  
全雲科會寫程式的魯蛇都在這！
<p align=right><font size=2>不然就是在~~3C研~~...</font></p>  

--

<p align=right>
![](https://scontent.fkhh1-1.fna.fbcdn.net/v/t1.0-1/c59.0.160.160/p160x160/23794764_1769772383057723_4761971016666269925_n.jpg?_nc_cat=0&_nc_eui2=AeH7JLrHtJovV37SVWSm_CskeX-lBYAvXAE84xxkEb__qsGEOMfmtkiFI0kh4qbeBCxcsEuCeGPnQfBUqcvqi-l_RWW30NmmMIBQXsHxIaeCHQ&oh=33602004d3684352e10e95ec76420109&oe=5BB14CC9)  
<font size=7>Clooooode a.k.a. clo5de</font>
<p align=left>
<font size=5>
Junior of YunTech CSIE,  
YunNet system developer and maintainer,  
Minister of Educate Section,  
Pythoneer, trying to be a Pythonista,  
Javer,  
Also Vimer.
Right now I'm in a deep hole called CTF.   
</font>
</p>

--

接下來的內容簡報係由各屆幹部所纂以臻完美。  
我們緬懷他們，感謝他們的付出。
<font size=4>
103 - Ting-You Xu (零夢）  
104 - Sean2525 (Mino)  
105 - jackey8616 (clooooode)  
</font>  
Rest In Peace.

---

## Linux  

--

### What is Linux?  

--

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCd0qFCpFBZqJi43XDwxsnYDzZdOknnwjeSmpWLoM3HYARGUurOQ)  
Not these motherfxxkers.  

--

I mean. Real one linux, you know?  
![](https://blog.techbridge.cc/img/kdchang/cs101/linux.jpg)  

--

你所需要知道的只有：

--

# Linux<font color="ORANGE">超屌</font>  
# Linux超棒
# Linux<font color="YELLOW">哈嘶哈嘶哈嘶</font>  

--

稍微介紹一下  
![](https://cdn.arstechnica.net/wp-content/uploads/2012/06/torvaldsnvidia-640x424.jpg)  
Linux的原生老爸是Linus。  
恩，大神。有來過台灣

--

基本上可以說是現在重大基礎建設的基底都是Linux。  
所以不管你是Windows還是MacOS，都給我現在馬上去裝Linux。

--

RIGHT NOWWWWWWWWWWWWWWWWW!!!!!!!!!!

--

<font size=5>
如果你是M$ 窗戶10以上。你可以到市集安裝Ubuntu子系統。  
如果你是MacOS，抱歉，我是窮鬼，我救不了你。  

如果你是Linux，請用Ubuntu。  
</font>
<font size=3>
（零夢：\Arch/ \Arch/ \Arch/ \Arch/ \Arch/ \Arch/ \Arch/)
</font>

--

<p><font size=5>
今天是第一節社課，原則上希望各位可以自行撥空安裝系統。  
為了維持上課的節奏，所以我就大發慈悲的借給你們我的GCP吧。  
  
但是這個只是暫時的，  
伺服器本身隨時都有可能會挪做他用。  
  
所以請務必要擁有自己的環境。  
我才不想幫你們收拾垃圾還要幫忙砍沒用的軟體。  
</font></p>

--

三十秒裝軟體，Unix不用裝，開始！
```
M$ Wind0ws - Pietty
Unix - ssh
Android - JuiceSSH
i0S - Shelly
```

--

以下教學，全部都是for Linux，  
哈。哈。哈。哈。哈。哈。哈。哈。  

--

```sh
ssh -p [port] [user]@[ip]
```

---

## Structure of Linux   

--

Root /

根？解？方程式？？？？？？  

--

如果Linux有C槽分割區。  
那毫無疑問`Root(/)`就是那個C槽。
![](https://steamcdn-a.akamaihd.net/steam/apps/420110/header.jpg?t=1478563708)  
絕對不會是放本子或者是GalGame的D槽。

--

![](/images/0x00/root.png)  
這是我的根目錄。

然後千萬不要`rm -rf /`  
你會身心靈受創，特別是筆電。  

--

![](/images/0x00/home.png)  
這是我家。

如果按照M$ 窗戶OS來看的話：  
大概等於`C:/Users/[Your account]`  

--

So keep in mind with `/` and `~`  
And NEVER `rm -rf` these folders!!!!  

--

我只講一次，仔細聽好了  
```sh
boot, sys -> ever never touch these!
tmp -> temporary  
mnt -> mount
bin -> executable file
dev -> phisical device
home -> all accounts home folder
```

--

Linux的終端機基本上可以說是常駐開啟。  
不管你是原生Terminal還是Fish，除非在看網頁，
不然只要電腦一打開，眼前就會是Terminal。

--

所以我決定先教你怎麼玩轉目錄。  
夠屌吧？

--

```sh
ls (list directory)
Ex: ls

cd (change directory)
Ex: cd /
Ex2: cd ~
  
mkdir (make directory)
Ex: mkdir Nekopara
Ex2: mkdir Mario
```  

--


