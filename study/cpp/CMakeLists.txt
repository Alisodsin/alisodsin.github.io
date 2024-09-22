cmake_minimum_required(VERSION 3.13.4)
project(MyApp)

# Set C++ standard to C++20
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Set source files
set(SOURCES main.cpp)

# Add the executable
add_executable(out ${SOURCES})

# Add the directory containing header files
target_include_directories(out PRIVATE /home/ali/extra/libs/c++/myheaders)
# target_include_directories(out PRIVATE /home/ali/extra/libs/c++/asio/include)
# target_include_directories(out PRIVATE /home/ali/extra/libs/c++/boost)