CoordMode, Mouse, Screen
F1::
    IfExist, /home/ali/extra/auto/flags/java
    {
        txt = "System.out.println();"
        spc = {Left 2} 
        Gosub pastTxt 
    } 

    IfExist, /home/ali/extra/auto/flags/cpp
    {
        txt = "cout << << endl;" 
        spc = {Left 9}{Space} 
        Gosub pastTxt 
    }

    IfExist, /home/ali/extra/auto/flags/node
    {

        txt = "console.log();" 
        spc = Send {Left 2} 
        Gosub pastTxt 

    }
    IfExist, /home/ali/extra/auto/flags/python
    {
        txt = "print()" 
        spc = {Left 1} 
        Gosub pastTxt
    } 

Return 
F2:: 
    RunWait ahk "/home/ali/extra/auto/scripts/autopy.ahk"
ExitApp
Return
F3::
    MouseMove, 1573, 980
    Click
    txt = "./c" 
    spc = {Enter} 
    Gosub pastTxt 
Return

F5::
    txt = "clear" 
    spc = {Enter} 
    Gosub pastTxt 
Return

F6::
    Send ^c
Return

F7::
    Send ^x
Return

F8::
    Send ^a
    Send ^v
Return

F9::
    Send ^a
    Send ^c
Return

F10::
    Send ^v
Return

!r::
    Run , reboot
Return

!x::
    Run , poweroff
Return 
!s::
    Run , systemctl suspend
Return 
!k::
    Run , code
Return

!f::
    Run , firefox
Return

!e::
    Run , microsoft-edge
Return 

!t::
    Run gnome-terminal
Return

:*:xxx::
    txt = "exit" 
    spc = {Enter} 
    Gosub pastTxt 
Return
:*:ff::^+i
:*:ppp::^+v
:*:lll::
    txt = "nmap -Pn localhost" 
    spc = {Enter} 
    Gosub pastTxt 
Return

:*:psss::
    txt = "pstree" 
    spc = {Enter} 
    Gosub pastTxt 
Return

:*:sddd::
    txt = "seprator.S.big();" 
    spc = {Enter} 
    Gosub pastTxt 
Return

:*:sds::
    txt = "seprator.S.small();"  
    spc = {Enter} 
    Gosub pastTxt 
Return

:*:rrt::
    txt = "reset" 
    spc = {Enter} 
    Gosub pastTxt 
Return

:*:rrr:: 
    txt = "rama" 
    spc = {Enter} 
    Gosub pastTxt 
Return
:*:rj:: 
    RunWait pastTxt "find . \( -name "*.class" -o -name "*.jar" -o -name "manifest.txt" \) -print | xargs rm" "enter" 1
Return

:*:rooto::
    txt = "sudo -i" 
    spc = {Enter} 
    Gosub pastTxt 
    Sleep 200 
    txt = "111" 
    spc = {Enter} 
    Gosub pastTxt 
Return

:*:nnn::
    txt = "#include <iostream>" 
    spc = {Enter} 
    Gosub pastTxt 
    txt = "using namespace std;"  
    spc = {Enter} 
    Gosub pastTxt 
Return

:*:szzz::
    txt = "used-space" 
    spc = {Enter} 
    Gosub pastTxt 
Return
:*:reot::
    txt = "echo $?"
    spc = {Enter} 
    Gosub pastTxt 
Return

:*:rer::
    txt = "clear();location.reload();"
    spc = {Enter} 
    Gosub pastTxt 
Return

:*:gnm::
    txt = "gnome-terminal"
    spc = {Enter} 
    Gosub pastTxt
Return 

:*:nmnm::
    IfExist, /home/ali/extra/auto/flags/java
    {
        Run, bash -c "cat /home/ali/extra/auto/news/newj > /home/ali/extra/study/java/cod/Main.java"
    }
    IfExist, /home/ali/extra/auto/flags/cpp
    {
        Run, bash -c "cat /home/ali/extra/auto/news/newp > /home/ali/extra/study/cpp/main.cpp"
    }
Return

:*:kode::

    IfExist, /home/ali/extra/auto/flags/java
    {
        RunWait code "/home/ali/extra/study/java/cod/"
        Run microsoft-edge "/home/ali/extra/books/java/java.pdf" "notion.so" "https://www.youtube.com/watch?v=KuvkahVyY9E&list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5&index=87"
    }
    IfExist, /home/ali/extra/auto/flags/cpp
    {
        RunWait code "/home/ali/extra/study/cpp/"
        Run microsoft-edge "/home/ali/extra/books/cpp/modernCpp.pdf" "https://www.notion.so" "https://alisodsin.github.io/valid-cpp.html" 
    }
    IfExist, /home/ali/extra/auto/flags/python 
    {
        Run code "/home/ali/extra/study/python/" 
    }
    IfExist, /home/ali/extra/auto/flags/node 
    {
        RunWait code "/home/ali/extra/study/node" 
    }
Return 

pastTxt: 
    ClipSave = %Clipboard%
    Clipboard := %txt% 
    Sleep 20 
    Send ^+v 
    Send %spc% 
    Clipboard = %ClipSave% 
    Sleep 20 
Return 
