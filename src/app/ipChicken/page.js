// pages/ip-chicken.js
"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const IpChicken = () => {
  const [ip, setIp] = useState("");
  const [ipInfo, setIpInfo] = useState("");
  const [ipAbuse, setIpAbuse] = useState("");
  const [weather, setWeather] = useState("");
  const [browser, setBrowser] = useState("");
  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setIp(data.ip);
        fetchIPInfo(data.ip);
        fetchIPAbuse(data.ip);
        fetchWeather(data.ip);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    fetchIp();
    setBrowser(`Browser: ${navigator.userAgent}`);
  }, []);

  const fetchIPInfo = async (ip) => {
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/iplookup?address=${ip}`,
        {
          method: "GET",
          headers: { "X-Api-Key": "y74kLG1bNDG0c8KBafHDtQ==6YuCLdfRUip3UDue" },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const now = new Date();
      setIpInfo(
        `Time: ${now.toLocaleTimeString()} ${data.region} ${data.country} ${
          data.region_code
        } ${data.country_code} ${data.timezone}`
      );
      setIpAbuse(
        data.is_valid
          ? `The IP-address ${ip} is whitelisted, valid, and secure.`
          : `The IP-address ${ip} is not valid and secure.`
      );
    } catch (error) {
      console.error("Error fetching IP info:", error);
    }
  };

  const fetchIPAbuse = async (ip) => {
    try {
      const response = await fetch(
        `https://api.abuseipdb.com/api/v2/check?ipAddress=${ip}`,
        {
          method: "GET",
          headers: {
            Key: "4dcb18ece7add5543c4554cb55107e888eb0e422b57f270d2c64c39937ecd94ab54b1f663ad3ef7a",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      // Handle IP abuse data if needed
    } catch (error) {
      console.error("Error fetching IP abuse info:", error);
    }
  };

  const fetchWeather = async (ip) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?q=${ip}`,
        {
          method: "GET",
          headers: {
            Key: "23589e14dfd9486d90b171530241507",
          },
        }
      );
      const data = await response.json();
      setWeather(
        `Weather: ${data.location.name}: ${data.current.temp_c}°C, ${data.current.condition.text}`
      );
    } catch (error) {
      console.error("Error fetching weather info:", error);
    }
  };

  return (
    <>
      <Head>
        <title>
          IP Chicken - What is my IP address? Free public IP lookup.
        </title>
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=iso-8859-1"
        />
        <meta
          name="Description"
          content="What is my IP? Get your current public IP address"
        />
        <meta
          name="keywords"
          content="what is my ip, ip lookup, whats my ip, whatismyip, ip address lookup, find ip, find your ip address, ipaddress, ipconfig, address, remote, remote access, whois, vpn, admin, dns, tcp, portscan, telnet, ping, network, router, openssh, linux, ipv6"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <div>
        <table
          width="577"
          border="0"
          cellSpacing="0"
          cellPadding="0"
          align="center"
        >
          <tbody>
            <tr>
              <td>
                <Image
                  src="/imagess/main.gif"
                  width={577}
                  height={126}
                  alt="Main Banner"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table
          width="577"
          border="0"
          cellSpacing="0"
          cellPadding="0"
          align="center"
        >
          <tbody>
            <tr>
              <td></td>
              <td>
                <Image
                  src="/imagess/7.gif"
                  width={19}
                  height={19}
                  alt="Banner"
                />
              </td>
              <td valign="top">
                <p>
                  <Image
                    src="/imagess/1main_10.gif"
                    width={511}
                    height={23}
                    alt="Banner"
                  />
                </p>
                <p align="center">
                  <span
                    style={{
                      fontSize: "24px",
                      color: "#0000FF",
                      fontWeight: "bold",
                    }}
                  >
                    {ip}
                  </span>
                </p>
                <p align="left">
                  <Image
                    src="/imagess/main_12.gif"
                    width={511}
                    height={24}
                    alt="Banner"
                  />
                </p>
                <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                  <tbody>
                    <tr>
                      <td width="6%">
                        <Image
                          src="/imagess/green.gif"
                          width={25}
                          height={25}
                          alt="Green Indicator"
                        />
                      </td>
                      <td width="94%">
                        <span style={{ fontSize: "14px" }}>{ipInfo}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Image
                          src="/imagess/green.gif"
                          width={25}
                          height={25}
                          alt="Green Indicator"
                        />
                      </td>
                      <td>
                        <span style={{ fontSize: "14px" }}>{browser}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Image
                          src="/imagess/green.gif"
                          width={25}
                          height={25}
                          alt="Green Indicator"
                        />
                      </td>
                      <td>
                        <span style={{ fontSize: "14px" }}>{ipAbuse}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Image
                          src="/imagess/green.gif"
                          width={25}
                          height={25}
                          alt="Green Indicator"
                        />
                      </td>
                      <td>
                        <span style={{ fontSize: "14px" }}>{weather}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <Image
                  src="/imagess/9.gif"
                  width={21}
                  height={21}
                  alt="Banner"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table
          width="577"
          height="17"
          border="0"
          cellSpacing="0"
          cellPadding="0"
          align="center"
        >
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table
          width="577"
          border="0"
          cellSpacing="0"
          cellPadding="0"
          align="center"
        >
          <tbody>
            <tr>
              <td></td>
              <td>
                <font size="1" face="Verdana, Arial, Helvetica, sans-serif" />
                <br />
                <br />
                <br />
              </td>
            </tr>
          </tbody>
        </table>
        <table
          width="94"
          border="0"
          align="center"
          cellSpacing="0"
          cellPadding="3"
        >
          <tbody>
            <tr>
              <td width="88">
                <div align="center">
                  <b>
                    <font face="Verdana, Arial, Helvetica, sans-serif" size="1">
                      Link To Us:
                    </font>
                  </b>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="link.html">
                  <Image
                    src="/imagess/ipc.gif"
                    width={88}
                    height={31}
                    alt="Link to Us"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <p align="center">
          <font face="Verdana, Arial, Helvetica, sans-serif" size="1">
            (c) 2024 IPChicken -<a href="privacy.html">Privacy Policy</a>
          </font>
        </p>
      </div>
    </>
  );
};

export default IpChicken;
