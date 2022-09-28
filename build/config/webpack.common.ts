import { Configuration } from "webpack";
import { projectName, projectRoot, resolvePath } from "../env";
import webpackBar from "webpackbar";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import WebpackBundleAnalyzer from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { tslOption } from "./tslOption";

export const commonConfig: Configuration = {
  context: projectRoot,
  entry: resolvePath(projectRoot, "./src/index.tsx"),
  output: {
    // publicPath: "/",
    path: resolvePath(projectRoot, "./dist"),
    filename: "js/[name].[contenthash].js",
    hashSalt: projectName,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: tslOption,
          },
        ],
        exclude: /node_modules/,
      },
      // {
      //   test: /\.tsx?$/,
      //   use: {
      //     loader: "ts-loader",
      //     options: tslOption,
      //   },
      //   exclude: /node_modules/,
      // },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     "style-loader",
      //     {
      //       loader: "css-loader",
      //       options: {
      //         modules: {
      //           localIdentName: "[local]--[hash:base64:5]",
      //           exportLocalsConvention: "camelCase",
      //         },
      //         sourceMap: true,
      //         importLoaders: 1,
      //       },
      //     },
      //     {
      //       loader: "sass-loader",
      //       options: {
      //         sourceMap: true,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new webpackBar({
      name: "template-react",
      color: "#61dafb",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolvePath(projectRoot, "./public/index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "*",
          to: resolvePath(projectRoot, "./dist"),
          context: resolvePath(projectRoot, "./public"),
          filter: (resourcePath) => {
            const r = !resourcePath.endsWith("index.html");
            // console.log(r);
            return r;
          },
        },
      ],
    }),
    // new WebpackBundleAnalyzer.BundleAnalyzerPlugin(),
    new ForkTsCheckerWebpackPlugin({ async: false }),
  ],
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: "all",
      maxInitialRequests: Infinity,
      // minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace("@", "")}`;
          },
        },
      },
    },
  },
};
