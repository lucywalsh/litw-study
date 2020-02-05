import json
import csv

def read_db_data():
    with open('db_data.json','r') as f:
        data=json.load(f)
        #print(json.dumps(data, indent=4, sort_keys=True))
        data_by_UUID = litw_data_by_UUID(data)
        headings=['uuid','retake','age','country','education','dataprivacy','why',
                  'accuweather','allrecipes','amazon','apple','bbc','dictionary','ebay','expedia','facebook','gmail','google','google-maps','instagram','linkedin','netflix','nytimes','paypal','reddit','tripadvisor','twitter','whatsapp','wikipedia','youtube',
                  't1-rt-ex','t1-responses-ex','t1-scenario-ex',
                  't1-rt-1','t1-responses-1','t1-scenario-1',
                  't1-rt-2','t1-responses-2','t1-scenario-2',
                  't1-rt-3','t1-responses-3','t1-scenario-3',
                  't1-rt-4','t1-responses-4','t1-scenario-4',
                  't1-rt-5','t1-responses-5','t1-scenario-5',
                  't1-rt-6','t1-responses-6','t1-scenario-6',
                  't1-rt-7','t1-responses-7','t1-scenario-7',
                  't1-rt-8','t1-responses-8','t1-scenario-8',
                  't1-rt-9','t1-responses-9','t1-scenario-9',
                  't1-rt-10','t1-responses-10','t1-scenario-10',
                  't2-rt-ex','t2-responses-ex','t2-question-ex','t2-website-ex',
                  't2-rt-1','t2-responses-1-1','t2-responses-1-2','t2-responses-1-3','t2-question-1-1','t2-question-1-2','t2-question-1-3','t2-website-1',
                  't2-rt-2','t2-responses-2-1','t2-responses-2-2','t2-responses-2-3','t2-question-2-1','t2-question-2-2','t2-question-2-3','t2-website-2',
                  't2-rt-3','t2-responses-3-1','t2-responses-3-2','t2-responses-3-3','t2-question-3-1','t2-question-3-2','t2-question-3-3','t2-website-3',
                  't2-rt-4','t2-responses-4-1','t2-responses-4-2','t2-responses-4-3','t2-question-4-1','t2-question-4-2','t2-question-4-3','t2-website-4',
                  't2-rt-5','t2-responses-5-1','t2-responses-5-2','t2-responses-5-3','t2-question-5-1','t2-question-5-2','t2-question-5-3','t2-website-5',
                  't3-rt-ex','t3-responses-ex','t3-tool-ex',
                  't3-rt-1','t3-responses-1','t3-tool-1',
                  't3-rt-2','t3-responses-2','t3-tool-2',
                  't3-rt-3','t3-responses-3','t3-tool-3',
                  't3-rt-4','t3-responses-4','t3-tool-4',
                  't3-rt-5','t3-responses-5','t3-tool-5',
                  't3-rt-6','t3-responses-6','t3-tool-6',
                  't3-rt-7','t3-responses-7','t3-tool-7',
                  't3-rt-8','t3-responses-8','t3-tool-8',
                  'general-comments','technical','technical-comments','cheating','cheating-comments']
        with open('23-01.csv', 'w') as csvfile:
            csvfile.write("%s,"%(headings))
            for key in data_by_UUID.keys():
                csvfile.write("%s,%s\n"%(key,data_by_UUID[key]))

def litw_data_by_UUID(litw_dump_data):
    data_by_UUID = {}
    data_to_get = ['accuweather','allrecipes','amazon','apple','bbc','dictionary','ebay','expedia','facebook','gmail','google','google-maps','instagram','linkedin','netflix','nytimes','paypal','reddit','tripadvisor','twitter','whatsapp','wikipedia','youtube','rt','responses','scenario','tool','questions','website']
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
                        elif key == 'website' and value == '{}':
                            break
                        else:
                            data_by_UUID[uuid].append(value)
        except:
            print('Could not find the UUID in this entry:')
            #print(entry)
    print(data_by_UUID['23ff7429-6946-4a19-a457-8812669e3b37'])
    return data_by_UUID
    
