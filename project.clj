(defproject propel "0.1.0"
  :description "Tom Helmuth's small Push implementation in Clojure."
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.10.238"]
                 [reagent "0.8.0"]]
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.3.7"]]
  :main ^:skip-aot propel.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}}
  :cljsbuild {
    :builds [{
        :source-paths ["src/propel"]
        :compiler {
          :output-to "www/propel.js"
          :optimizations :whitespace
          :pretty-print true}}]})
