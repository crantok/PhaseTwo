var volQuery = "PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX prop: <http://data.gmdsp.org.uk/data/manchester/volunteers/stats/ward/prop/>
PREFIX stats: <http://data.gmdsp.org.uk/data/manchester/volunteers/stats/>
PREFIX tff: <http://reference.data.gov.uk/id/government-half/2014-2015/>
PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>

SELECT DISTINCT ?count ?label ?lat ?long
WHERE {
	?obv rdf:type qb:Observation ;
		qb:dataSet stats:ward ;
		prop:period tff:Q1 ;
		prop:area ?ward ;
		prop:count ?count .
	?ward owl:sameAs ?ordRef .
	SERVICE <http://data.ordnancesurvey.co.uk/datasets/os-linked-data/apis/sparql> {
        ?ordRef rdfs:label ?label ;
			geo:lat ?lat ;
			geo:long ?long .		
    }
}
LIMIT 50
";