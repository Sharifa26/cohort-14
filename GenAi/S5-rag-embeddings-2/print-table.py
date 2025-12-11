


def show_table():
    data = collection.get()
    
    print("\n================ VECTOR DB TABLE ================")
    for i in range(len(data['ids'])):
        print(f"\nRow {i+1}")
        print(f"ID: {data['ids'][i]}")
        print(f"Document: {data['documents'][i][:80]}...")
        print(f"Metadata: {data['metadatas'][i]}")
        print(f"Embedding length: {len(data['embeddings'][i])}")
    print("=================================================\n")


show_table()
