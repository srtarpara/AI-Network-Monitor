import nmap
from mac_vendor_lookup import MacLookup

mac_lookup = MacLookup()

def get_vendor(mac):
    try:
        return mac_lookup.lookup(mac)
    except Exception:
        return "Unknown"

def port_scan(ip):
    """
    Scans the 20 most common ports. Fast enough to run per device.
    Returns list of open port numbers.
    """
    nm = nmap.PortScanner()
    nm.scan(ip, arguments="-F --open -T4")
    open_ports = []
    if ip in nm.all_hosts():
        for proto in nm[ip].all_protocols():
            for port in nm[ip][proto]:
                if nm[ip][proto][port]["state"] == "open":
                    open_ports.append(port)
    return open_ports

def enrich_device(device):
    """Takes a {ip, mac} dict and adds vendor + open ports."""
    device["vendor"] = get_vendor(device["mac"])
    device["open_ports"] = port_scan(device["ip"])
    return device