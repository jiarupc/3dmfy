package com.dmfy.Interceptor;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class InitInterceptor implements HandlerInterceptor {

    public boolean preHandle(HttpServletRequest request,
                             HttpServletResponse response,
                             Object handler) throws Exception {
        String index = "/admin/index";
        String login = "/admin/login";

        if (request.getRequestURI().equals(index)) {
            return true;
        }

        if (request.getRequestURI().equals(login)) {
            return true;
        }

        if (request.getSession().getAttribute("user") != null) {
            System.out.println("success");
            return true;
        }

        System.out.println("fail");
        response.sendRedirect(request.getContextPath() + index);
        return false;
    }

    public void postHandle(HttpServletRequest request, HttpServletResponse response,
                           Object handler, ModelAndView modelAndView) throws Exception {
    }

    public void afterCompletion(HttpServletRequest request, HttpServletResponse response,
                                Object handler, Exception ex) throws Exception {
    }
}
