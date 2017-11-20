#All of these imports used, if the code is broken down into several sections like it is on the wiki,
#might not make sense to include all of them at the beginning, but will save time for new devs

import requests, zipfile, os, pickle, json, sqlite3

def build_dict():
    print('Connecting to sqlite db thing')
    con = sqlite3.connect('manifest.content')
    cur = con.cursor()

    all_data = {}
    cur.execute('SELECT json from DestinyInventoryItemDefinition')

    items = cur.fetchall()

    item_jsons = [json.loads(item[0]) for item in items]

    item_dict = {}
    #'displayProperties'
    #'screenshot'
    #'itemTypeDisplayName'
    #'itemTypeAndTierDisplayName'
    for item in item_jsons:
        if ( item['displayProperties']['name'] != "Classified" ):
            if ( item['itemTypeDisplayName'] != None):
                item_dict[item['displayProperties']['name']] = item['displayProperties']
                item_dict[item['displayProperties']['name']]['type'] = item['itemTypeDisplayName']
                item_dict[item['displayProperties']['name']]['tier'] = item['itemTypeAndTierDisplayName']

    #add that dictionary to our all_data using the name of the table
    #as a key.
    #all_data[table_name] = item_dict

    print('Dictionary Generated!')
    return item_dict


print("Starting...")
all_data = build_dict()
with open('manifest.pickle', 'wb') as data:
    pickle.dump(all_data, data)
    print("'manifest.pickle' created!\nDONE!")

#with open('manifest.pickle', 'rb') as data:
#    all_data = pickle.load(data)

print(len(all_data))
#print(all_data['Coldheart']['tier'])
print("Exotic" in all_data['Coldheart']['tier'])
print(not all_data['Raven Shard']['tier'])
#cleanse tierless items AND non exotics
for item in list(all_data):
    if not all_data[item]['tier']:
        del(all_data[item])
    elif "Exotic" not in all_data[item]['tier']:
        del(all_data[item])

print(len(all_data))
#ghorn = all_data['DestinyInventoryItemDefinition'][hash]

#print('Name: '+ghorn['itemName'])
