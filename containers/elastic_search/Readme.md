Run 'sudo sysctl -w vm.max_map_count=262144' in case you get the following 
error when running "docker-compose up":

Exception in thread "main" java.lang.RuntimeException: bootstrap checks failed
initial heap size [268435456] not equal to maximum heap size [2147483648]; 
this can cause resize pauses and prevents mlockall from locking the entire heap