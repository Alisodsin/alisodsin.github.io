CoordMode, Mouse, Screen
F1::
    IfExist, /home/ali/extra/auto/flags/java
    {
        RunWait pastTxt "println();" "left" 2
    } 

    IfExist, /home/ali/extra/auto/flags/cpp
    {
        RunWait pastTxt "cout << << endl;"  "left" 9
        Send {Space} 
    } 

    IfExist, /home/ali/extra/auto/flags/node
    {

        RunWait pastTxt "console.log();"  "left" 2

    } 
    IfExist, /home/ali/extra/auto/flags/python
    {
        RunWait pastTxt "print()" "left" 1
    } 

Return 
F2:: 
    RunWait ahk "/home/ali/extra/auto/scripts/auto.ahk"
ExitApp
Return
F3::
    MouseMove, 1573, 980
    Click 
    RunWait pastTxt "./c" "enter" 1

Return

F5:: 
    RunWait pastTxt "clear" "enter" 1
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
    RunWait , reboot
Return

!x::
    RunWait , poweroff
Return
!s::
    Run , systemctl suspend
Return 
!k::
    RunWait , code
Return

!f::
    RunWait , firefox
Return

!e::
    RunWait , microsoft-edge
Return 

!t::
    RunWait gnome-terminal
Return

:*:xxx::
    RunWait pastTxt "exit" "enter" 1
Return
:*:ff::^+i
:*:ppp::^+v
:*:xcx::./x{enter}
:*:lll::
    RunWait pastTxt "nmap -Pn localhost" "enter" 1
Return

:*:psss::
    RunWait pastTxt "pstree" "enter" 1 
Return

:*:sddd::
    RunWait pastTxt "big();" "enter" 1   
Return

:*:sds::
    RunWait pastTxt "small();" "enter" 1    
Return

:*:rrt::
    RunWait pastTxt "reset" "enter" 1 

Return

:*:rdf::
    RunWait pastTxt 'readFile("");' left 3

Return

:*:rrr:: 
    RunWait pastTxt "rama" "enter" 1 

Return
:*:rj:: 
    RunWait pastTxt "find . \( -name "*.class" -o -name "*.jar" -o -name "manifest.txt" \) -print | xargs rm" "enter" 1

Return 

:*:rooto::
    RunWait pastTxt "sudo -i" "enter" 1 
    Sleep 500
    RunWait pastTxt "111" "enter" 1 
Return 

:*:nnn:: 

    IfExist, /home/ali/extra/auto/flags/java
    {
        RunWait pastTxt "import static lib.Functions.*;" "enter" 1
    } 

    IfExist, /home/ali/extra/auto/flags/cpp
    {
        RunWait pastTxt "#include <iostream>" "enter" 1 
        RunWait pastTxt "using namespace std;" "enter" 1  
    } 
Return 

:*:szzz:: 
    RunWait pastTxt "used-space" "enter" 1 
Return
:*:reot::
    RunWait pastTxt "echo $?" "enter" 1 
Return

:*:rer:: 
    RunWait pastTxt "clear();location.reload();" "enter" 1 
Return

:*:oppp:: 
    RunWait pastTxt "open MyApp.jar" "enter" 1 
Return

:*:stts:: 
    RunWait pastTxt "cd ../../" "enter" 1 
    sleep 500
    RunWait pastTxt "git status" "enter" 1
    sleep 500
    RunWait pastTxt "cd -" "enter" 1
Return

:*:gnm:: 
    RunWait pastTxt "gnome-terminal" "enter" 1 
Return 

:*:nmnm::
    IfExist, /home/ali/extra/auto/flags/java
    {
        RunWait, bash -c "cat /home/ali/extra/auto/news/newj > /home/ali/extra/repos/alisodsin.github.io/study/java/Main.java"
    }
    IfExist, /home/ali/extra/auto/flags/cpp
    {
        RunWait, bash -c "cat /home/ali/extra/auto/news/newp > /home/ali/extra/study/cpp/main.cpp"
    }
Return

:*:kode::

    IfExist, /home/ali/extra/auto/flags/java
    {
        RunWait code "/home/ali/extra/repos/alisodsin.github.io/study/java/"
        RunWait microsoft-edge "/home/ali/extra/books/java/java.pdf" "notion.so" "https://www.youtube.com/watch?v=KuvkahVyY9E&list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5&index=87"
    }
    IfExist, /home/ali/extra/auto/flags/cpp
    {
        RunWait code "/home/ali/extra/repos/alisodsin.github.io/study/cpp/"

        RunWait microsoft-edge "/home/ali/extra/books/cpp/modernCpp.pdf" "https://www.notion.so" "https://alisodsin.github.io/valid-cpp.html" 
    }
    IfExist, /home/ali/extra/auto/flags/python 
    {
        RunWait code "/home/ali/extra/repos/alisodsin.github.io/study/python/" 
    }
    IfExist, /home/ali/extra/auto/flags/node 
    {
        RunWait code "/home/ali/extra/repos/alisodsin.github.io/study/node" 
    }
Return 