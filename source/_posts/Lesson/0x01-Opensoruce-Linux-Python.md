---
title: 0x01 Opensoruce Linux Python
date: 2018-06-04 19:40:09
tags:
slidehtml:
  titleMerge: false
---
## 第一節社課。  
{% iframe ./slide.html 500 %}  
[全螢幕](./slide.html)  

<!-- Slide Start -->
<font size=9>Yuntech Open-Source Club  
(YunOSC)</font>
  
<font size=6><p align=right>0x01 Opensource & Linux</p></font>  

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
YunOSC Minister of Educate Section,  
Pythoneer, trying to be a Pythonista,  
Javer,  
Also Vimer.
Right now I'm in a deep hole called CTF and Deep Learning.   
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

![](/images/Lession/0x01/root.png)  
這是我的根目錄。

然後千萬不要`rm -rf /`  
你會身心靈受創，特別是筆電。  

--

![](/images/Lession/0x01/home.png)  
這是我家。

如果按照M$ 窗戶OS來看的話：  
大概等於`C:/Users/[Your account]`  

--

So keep in mind with `/` and `~`  
And NEVER `rm -rf` these folders!!!!  

---

## Directory Structure  

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

rm (remove file or directory)
Ex: rm [a.file]
Ex2: rm -r [a.directory.and.every.file.inside]
 ^
 └ This will ask you to check delete.
Ex3: rm -rf [Dont.ask.me.just.delete.it]
 ^
 └ This will not ask you, just delete every thing. 
```

--

如果你看不懂英文，我可以翻譯給你聽。  
```sh
ls -> 列出當前目錄檔案
cd -> 移至目標目錄
mkdir -> 建立目錄
rm -> 移除檔案或目錄即其內容檔案
```

--

如果你還是不懂，請聯繫社幹。  
他們會拯救你。（應該吧...

--

玩權限我最會，檔案看得到用不到是不是很杜爛R？  
```sh
~> ls -l
total 68
drwxrwxr-x  2 clode clode 4096  六   1 15:46 bin/
drwxr-xr-x  2 clode clode 4096  三   7 12:01 Desktop/
drwxr-xr-x  2 clode clode 4096  三   7 12:01 Documents/
drwxr-xr-x  5 clode clode 4096  六   5 11:34 Downloads/
drwxrwxr-x  3 clode clode 4096  四  11 05:47 Font/
drwxr-xr-x  2 clode clode 4096  三   7 12:01 Music/
drwxr-xr-x  2 clode clode 4096  六   5 08:16 Pictures/
drwxrwxr-x 18 clode clode 4096  六   3 19:29 Program/
drwxr-xr-x  2 clode clode 4096  三   7 12:01 Public/
-rw-rw-r--  1 clode clode 1398  三  17 15:51 song
drwxr-xr-x  2 clode clode 4096  三   7 12:01 Templates/
drwxrwxr-x  7 clode clode 4096  四  11 04:50 Themes/
drwxrwxr-x 19 clode clode 4096  六   1 16:11 Tools/
drwxrwxr-x  6 clode clode 4096  四  30 20:31 venv2.7/
drwxrwxr-x  6 clode clode 4096  四  30 20:20 venv3.5/
drwxr-xr-x  2 clode clode 4096  三   7 12:01 Videos/
drwxrwxr-x  3 clode clode 4096  五  22 15:43 VirtualBox VMs/
```
這是我家，不要亂看。

--

講了目錄， 一定要講個權限R。
![](/images/Lession/0x01/ls.png)  

--

```sh
d = directory
l = link
- = nothing
r = read
w = write
x = execute
- = not allow
```

--

看了很多字，是不是很煩？  
我們來算一下數學吧！  
我超愛算數學的！嘻嘻嘻嘻嘻！  

--

1 + 1 = 10  
不要問我為什麼，記下來就對了。

--

1 + 2 + 4 = 111

--

回到權限。  
![](/images/Lession/0x01/ls.png)  
rwx你看到什麼了？  

--

3個一組，總共3組。
```sh
rwx rwx rwx
 |   |  others
 |   └─ group
 └───── user
```

--

```sh
001 = --x
010 = -w-
011 = -wx
...
111 = rwx
```
你看出什麼了？  

--

成功的經驗是可以複製的，  
我們依樣畫葫蘆。  
```sh
---rwx--- = 000 111 000 = 0 7 0
r-x---r-- = 101 000 100 = 5 0 4
...
rwxrwxr-x = 111 111 101 = 7 7 5
rwxrwxrwx = 111 111 111 = 7 7 7
```

--

你的就是你的， 你們的也是你們的。  
該你用，就你用，  
不該你用，就不能用。  

--

教練！可是我還是想用！  
```sh
~> chmod [permission code] [file / directory]  
or
~> chmod a+x [file / directory]
```
付費以開通VIP3權限！  

--

等等，教練！  
你沒講過第2種！  

| Subject    | Action        | Attribute   |  
| :--------- | :------------ | :---------- |  
| [a] all    | [+] add       | [r] read    |  
| [u] user   | [-] substract | [w] write   |  
| [g] group  | [=] set       | [x] execute |  
| [o] others | 

--

```sh
Before:
~> ls -l
-rw-rw-r--  1 clode clode 1398  三  17 15:51 song

After:
~> chmod 666 song
~> ls -l
-rw-rw-rw-  1 clode clode 1398  三  17 15:51 song
```
哇，真是太6了。

---

## Permission & Installation  

--

素肚？素起來，還要加辣！  
```sh
~> sudo
```

--

好寶寶公約：  
我絕對不會用sudo異動任何未知檔案。  
使用sudo命令執行任何指令前，再三確認。  

--

案例分享：  
Gitlab工程師，未檢查指令執行的伺服器。  
導致主要資料庫300GB的資料刪到只剩下4.5G。

--

由此可見，<font size=3>~~Linux的效率多好！~~</font>檢查指令的重要性！  

--

影子模仿術！  
![](https://04.imgmini.eastday.com/mobile/20180504/20180504143642_a9f278dc9a8def9e96947abd3c16a52b_1.jpeg)  
```sh
~> sudo su [user]
```

--

## Debian Apt  
```sh
> sudo apt-get update
> sudo apt-get upgrade
```
如果你很急著用電腦，就別輕易下upgrade....  

--




