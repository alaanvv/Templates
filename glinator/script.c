#include <stdio.h>
#include <stdlib.h>
#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include "shader.h"

#define ASSERT(x, str) if (!(x)) {printf(str); exit(1);}
#define WIDTH  800
#define HEIGHT 800

// ---

typedef struct {
  GLFWwindow* window;
} Canvas;

Canvas canvas;

void processInput(GLFWwindow* window) {
  if (glfwGetKey(window, GLFW_KEY_ESCAPE) == GLFW_PRESS)
    glfwSetWindowShouldClose(window, 1);
}

int main() {
  glfwInit();
  glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
  glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
  glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

  canvas.window = glfwCreateWindow(WIDTH, HEIGHT, "", NULL, NULL);
  ASSERT(canvas.window, "Failed to create a window");
  glfwMakeContextCurrent(canvas.window);
  ASSERT(gladLoadGLLoader((GLADloadproc)glfwGetProcAddress), "Failed loading glad");
  glViewport(0, 0, WIDTH, HEIGHT);

  float vertices[] = {
    0.25, 0.25, 0,
    0.75, 0.25, 0,
    0.50, 0.75, 0
  };

  while(!glfwWindowShouldClose(canvas.window)) {
    glClearColor(0.1, 0.1, 0.15, 1);
    glClear(GL_COLOR_BUFFER_BIT);

    glfwSwapBuffers(canvas.window);
    processInput(canvas.window);
    glfwPollEvents();    
  }

  glfwTerminate();
  return 0;
}
