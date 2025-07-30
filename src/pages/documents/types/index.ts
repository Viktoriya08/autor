export interface Doc {
  name: string
  document_file: string
  document_type: string
  document_size: string
  date: string
}

export interface DocType {
  section_name: string
  code: string
  items: Array<Doc>
}

export interface DocsPage {
  title?: string
  archive?: string
  listDocs: Array<DocType>
}

export interface docsRequest {
  status: string
  data: {
    download_all_files: string
    documents: Array<DocType>
  }
}
