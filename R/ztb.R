#' ZTB: A really fast HTML table viewer
#'
#' This is for displaying your data frames or matrices on your browser. It is
#' particularly meant for large tables and speed is the first priority.
#'
#' @param tb_ A \code{data.frame} or something that can be coerced into a \code{tibble} using \code{as_tibble}.
#' @import htmlwidgets
#' @import dplyr
#' @import tibble
#' @import knitr
#' @export
ztb <- function(tb_, use_viewer_=F) {
  dft <- tb_ %>% as_tibble %>% kable

  sizing_policy <- sizingPolicy(padding=0, browser.fill=T, viewer.suppress=!use_viewer_)

  createWidget(name = 'ztb', dft, sizingPolicy=sizing_policy)
}




#' Shiny bindings for ztb
#'
#' Output and render functions for using ztb within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a ztb
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name ztb-shiny
#'
#' @export
ztbOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'ztb', width, height, package = 'ztb')
}

#' @rdname ztb-shiny
#' @export
renderZtb <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, ztbOutput, env, quoted = TRUE)
}
