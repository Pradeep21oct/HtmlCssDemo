<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%
	String a =request.getParameter("a");
	String b =request.getParameter("b");
	int c= Integer.parseInt(a)+ Integer.parseInt(b);
    out.println(c);
    
%>
