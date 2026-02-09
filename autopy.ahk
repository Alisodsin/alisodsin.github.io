CoordMode, Mouse, Screen
F1::
    IfExist, /home/ali/extra/auto/flags/java
    {
        SendRaw println();
        Send {Left 2}
    }
    IfExist, /home/ali/extra/auto/flags/cpp
    {
        RunWait pastTxt "cout << << endl;" "left" 9
        Send {Space}
    }

    IfExist, /home/ali/extra/auto/flags/node
    {

        RunWait pastTxt "console.log();" "left" 2

    }
    IfExist, /home/ali/extra/auto/flags/python
    {
        RunWait pastTxt "print()" "left" 1
    }

Return
F3::
    WinGetClass, class, A
    If class = jetbrains-idea-ce
    {
        Send ^{F5}
        Return
    }
    MouseMove, 1573, 980
    Click
    RunWait pastTxt "./c" "enter" 1
Return
F5::
    SendRaw clear
    Send {Enter}
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
!i::
    RunWait , idea
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
    SendRaw exit
    Send {Enter}
Return
:*:ff::
    WinGetClass, class, A
    If class = jetbrains-idea-ce
    {
        Send +!f
        Return
    }
    Send ^+i
Return
:*:ppp::
    WinGetClass, class, A
    If class = jetbrains-idea-ce
    {
        Send ^v
        Return
    }
    Send ^+v
Return
:*:xcx::./x{enter}
:*:lll::nmap -Pn localhost{Enter}
:*:psss::pstree{Enter}
:*:sddd::
    WinGetClass, class, A
    If class = jetbrains-idea-ce
    {
        SendRaw big();
        Send {Enter}
        Return
    }
    RunWait pastTxt "big();" "enter" 1
Return
:*:sds::
    WinGetClass, class, A
    If class = jetbrains-idea-ce
    {
        SendRaw small();
        Send {Enter}
        Return
    }
    RunWait pastTxt "small();" "enter" 1
Return
:*:rrt::reset{Enter}
:*:rdf::
    WinGetClass, class, A
    If class = jetbrains-idea-ce
    {
        SendRaw readFile("");
        Send {Left 3}
        Return
    }
    RunWait pastTxt 'readFile("");' left 3

Return
:*:rrr::rama{Enter}
:*:nnn::
    IfExist, /home/ali/extra/auto/flags/java
    {
        WinGetClass, class, A
        If class = jetbrains-idea-ce
        {
            SendRaw import static lib.Functions.*;
            Send {Enter}
            Return
        }
        RunWait pastTxt "import static lib.Functions.*;" "enter" 1
        Return
    }

    IfExist, /home/ali/extra/auto/flags/cpp
    {
        RunWait pastTxt "#include <iostream>" "enter" 1
        RunWait pastTxt "using namespace std;" "enter" 1
    }
Return
:*:szzz::used-space{Enter}
:*:rer::
    RunWait pastTxt "clear();location.reload();" "enter" 1
Return
:*:oppp::open app.jar{Enter}
:*:stts::
    RunWait pastTxt "cd ../../" "enter" 1
    sleep 500
    RunWait pastTxt "git status" "enter" 1
    sleep 500
    RunWait pastTxt "cd -" "enter" 1
Return

:*:sttts::
    RunWait pastTxt "cd ../../../" "enter" 1
    sleep 500
    RunWait pastTxt "git status" "enter" 1
    sleep 500
    RunWait pastTxt "cd -" "enter" 1
Return

:*:gnm::gnome-terminal{Enter}
:*:nmnm::
    IfExist, /home/ali/extra/auto/flags/java
    {
        WinGetClass, class, A
        If class = jetbrains-idea-ce
        {
            RunWait, bash -c "cat /home/ali/extra/auto/news/newj > /home/ali/extra/study/java/src/Main.java"
            Return
        }
        RunWait, bash -c "cat /home/ali/extra/auto/news/newju > /home/ali/extra/repos/study/java/gui/java/src/Main.java"
        Return
    }
    IfExist, /home/ali/extra/auto/flags/cpp
    {
        RunWait, bash -c "cat /home/ali/extra/auto/news/newp > /home/ali/extra/study/cpp/main.cpp"
    }
Return
:*:kode::
    IfExist, /home/ali/extra/auto/flags/java
    {
        RunWait code "/home/ali/extra/repos/study/java/gui/java"
        ; RunWait microsoft-edge "/home/ali/extra/books/java/java.pdf" "notion.so" "https://www.youtube.com/watch?v=KuvkahVyY9E&list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5&index=87"
        RunWait firefox "notion.so"
        Return
    }
    IfExist, /home/ali/extra/auto/flags/cpp
    {
        RunWait code "/home/ali/extra/repos/alisodsin.github.io/study/cpp/"
        RunWait microsoft-edge "/home/ali/extra/books/cpp/modernCpp.pdf" "https://www.notion.so" "https://alisodsin.github.io/valid-cpp.html"
        Return
    }
    IfExist, /home/ali/extra/auto/flags/python
    {
        RunWait code "/home/ali/extra/repos/alisodsin.github.io/study/python/"
        Return
    }
    IfExist, /home/ali/extra/auto/flags/node
    {
        RunWait code "/home/ali/extra/repos/alisodsin.github.io/study/node"
    }
Return