Example Place reconciliation model
==================================

Status: testing 
---------------
Last test: 8th October

Overview
--------
Example project to illustrate the use of Ordnance Survey reconciliation services with Open Refine.

Use case
--------
OS provide reconsiliation services, which enable labels in a dataset to be converted to URIs in Open Refine.

By using these (and other) reconsiliation services, it is possible to quickly mint URIs, that can then be included in the RDF Skeleton.

Guidance
-----------
In this example, the following reconciliation services were deployed:

- OS Boundary Line: http://data.ordnancesurvey.co.uk/datasets/boundary-line/explorer/reconciliation (for admin geography)

- OS 50k Gazetter http://data.ordnancesurvey.co.uk/datasets/50k-gazetteer/explorer/reconciliation (for place names)

- OS Code-Point: http://data.ordnancesurvey.co.uk/datasets/code-point-open/explorer/reconciliation (for postcode points)

These services provide URI for the data.

In order to then include these in the RDF Skeleton, the following GREL command is used:

`cell.recon.match.id`


Ontologies
----------
In this example project, these two ontologies are utilised to generate an example RDF file.  This is not intended to be definitive or final:

locn: http://www.w3.org/ns/locn.html
postcode: http://data.ordnancesurvey.co.uk/ontology/postcode/

Contents
--------
The package consists of:

- Example spreadsheet
- Example Open Refine project 
- JSON file for the RDF Skeleton (which can be applied to other datasets)
- Example output RDF file

Further Info
------------
The following are useful sources of information:

- https://github.com/OpenRefine/OpenRefine/wiki/Reconciliation-Service-Api
- http://johngoodwin225.wordpress.com/2013/04/25/ordnance-survey-linked-data-and-the-reconciliation-api/
- http://freeyourmetadata.org/reconciliation/
- http://refine.deri.ie/showcases

Issues / 2do
------------

- LSOA reconciliation (via ONS service at http://statistics.data.gov.uk/ ?)
- Place names such as "Stockport Town Centre" will not match


