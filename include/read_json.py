import json
import csv

def read_db_data():
    with open('db_data.json','r') as f:
        data=json.load(f)
        #print(json.dumps(data, indent=4, sort_keys=True))
        data_by_UUID = litw_data_by_UUID(data)
        headings=['uuid','retake','age','country','education','dataprivacy','why','accuweather','allrecipes','amazon','apple','bbc','dictionary','ebay','expedia','facebook','gmail','google','google-maps','govuk','instagram','linkedin','netflix','nytimes','paypal','reddit','tripadvisor','twitter','whatsapp','wikipedia','youtube','t1-rt-ex','t1-responses-ex','t1-scenario-ex','t1-rt-1','t1-responses-1','t1-scenario-1','t1-rt-2','t1-responses-2','t1-scenario-2','t1-rt-3','t1-responses-3','t1-scenario-3','t1-rt-4','t1-responses-4','t1-scenario-4','t1-scenario-4','t1-rt-5','t1-responses-5','t1-scenario-5','t2-rt-ex','t2-responses-ex','t2-question-ex','t2-website-ex','t2-rt-1','t2-responses-1','t2-question-1','t2-website-1','t2-rt-2','t2-responses-2','t2-question-2','t2-website-2','t2-rt-3','t2-responses-3','t2-question-3','t2-website-3','t2-rt-4','t2-responses-4','t2-question-4','t2-website-4','t2-rt-5','t2-responses-5','t2-question-5','t2-website-5','t3-rt-ex','t3-responses-ex','t3-tool-ex','t3-rt-1','t3-responses-1','t3-tool-1','general-comments','technical','technical-comments','cheating','cheating-comments']
        with open('test.csv', 'w') as csvfile:
            csvfile.write("%s,"%(headings))
            for key in data_by_UUID.keys():
                csvfile.write("%s,%s\n"%(key,data_by_UUID[key]))

def litw_data_by_UUID(litw_dump_data):
    data_by_UUID = {}
    data_to_get = ['accuweather','allrecipes','amazon','apple','bbc','dictionary','ebay','expedia','facebook','gmail','google','google-maps','govuk','instagram','linkedin','netflix','nytimes','paypal','reddit','tripadvisor','twitter','whatsapp','wikipedia','youtube','rt','responses','scenario','tool','questions','website']
    for entry in litw_dump_data:
        try:
            uuid = entry.pop('uuid')
            if uuid not in data_by_UUID:
                data_by_UUID[uuid]=[]
            data_type = entry.pop('data_type', None)
            if(data_type == 'study:demographics' or data_type == 'study:comments'):
                for key,value in entry.items():
                    data_by_UUID[uuid].append(value)
            if(data_type == 'study:data'):
                for key,value in entry.items():
                    if key in data_to_get:
                        if key == 'tool' and value == '{}':
                            break
                        elif key == 'scenario' and value == '{}':
                            break
                        else:
                            data_by_UUID[uuid].append(value)
        except:
            print('Could not find the UUID in this entry:')
            #print(entry)
    print(data_by_UUID['03f2c57e-93ef-4a99-8257-cc60230897e8'])
    return data_by_UUID
    
