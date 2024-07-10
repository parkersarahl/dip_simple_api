let hosts = window.location.hostname;

if ( hosts == "localhost"){
    hosts = "localhost:3000";
}

export { hosts }

