import { NextRequest, NextResponse } from 'next/server'

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
const TABLE_NAME = 'Leads'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { name, email, cargo, phone, empresa, cnpj, services, colaboradores } = data

    // Validação básica
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Nome, email e telefone são obrigatórios' },
        { status: 400 }
      )
    }

    // Verificar configuração
    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      console.error('Airtable não configurado')
      return NextResponse.json(
        { error: 'Configuração do servidor incompleta' },
        { status: 500 }
      )
    }

    // Criar registro via API REST do Airtable
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(TABLE_NAME)}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                'Name': name,
                'Email': email,
                'Cargo': cargo || '',
                'Telefone': phone,
                'Empresa': empresa || '',
                'CNPJ': cnpj || '',
                'Serviços': services?.join(', ') || '',
                'Colaboradores': colaboradores || '',
                'Data': new Date().toISOString().split('T')[0],
              },
            },
          ],
        }),
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Erro Airtable:', errorData)
      return NextResponse.json(
        { error: 'Erro ao salvar no Airtable', details: errorData },
        { status: 500 }
      )
    }

    const result = await response.json()
    return NextResponse.json(
      { success: true, id: result.records[0].id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Erro ao salvar:', error)
    return NextResponse.json(
      { error: 'Erro ao salvar dados. Tente novamente.' },
      { status: 500 }
    )
  }
}
