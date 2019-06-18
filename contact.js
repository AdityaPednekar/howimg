{\rtf1\ansi\ansicpg1252\cocoartf1671\cocoasubrtf200
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Input Lock\
$('textarea').blur(function () \{\
    $('#hire textarea').each(function () \{\
        $this = $(this);\
        if ( this.value != '' ) \{\
          $this.addClass('focused');\
          $('textarea + label + span').css(\{'opacity': 1\});\
        \}\
        else \{\
          $this.removeClass('focused');\
          $('textarea + label + span').css(\{'opacity': 0\});\
        \}\
    \});\
\});\
\
$('#hire .field:first-child input').blur(function () \{\
    $('#hire .field:first-child input').each(function () \{\
        $this = $(this);\
        if ( this.value != '' ) \{\
          $this.addClass('focused');\
          $('.field:first-child input + label + span').css(\{'opacity': 1\});\
        \}\
        else \{\
          $this.removeClass('focused');\
          $('.field:first-child input + label + span').css(\{'opacity': 0\});\
        \}\
    \});\
\});\
\
$('#hire .field:nth-child(2) input').blur(function () \{\
    $('#hire .field:nth-child(2) input').each(function () \{\
        $this = $(this);\
        if ( this.value != '' ) \{\
          $this.addClass('focused');\
          $('.field:nth-child(2) input + label + span').css(\{'opacity': 1\});\
        \}\
        else \{\
          $this.removeClass('focused');\
          $('.field:nth-child(2) input + label + span').css(\{'opacity': 0\});\
        \}\
    \});\
\});}