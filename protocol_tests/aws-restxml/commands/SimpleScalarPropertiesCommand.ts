import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { SimpleScalarPropertiesInputOutput } from "../models/models_0";
import {
  deserializeAws_restXmlSimpleScalarPropertiesCommand,
  serializeAws_restXmlSimpleScalarPropertiesCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type SimpleScalarPropertiesCommandInput = SimpleScalarPropertiesInputOutput;
export type SimpleScalarPropertiesCommandOutput = SimpleScalarPropertiesInputOutput & __MetadataBearer;

export class SimpleScalarPropertiesCommand extends $Command<
  SimpleScalarPropertiesCommandInput,
  SimpleScalarPropertiesCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SimpleScalarPropertiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestXmlProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SimpleScalarPropertiesCommandInput, SimpleScalarPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "RestXmlProtocolClient",
      commandName: "SimpleScalarPropertiesCommand",
      inputFilterSensitiveLog: SimpleScalarPropertiesInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: SimpleScalarPropertiesInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SimpleScalarPropertiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlSimpleScalarPropertiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SimpleScalarPropertiesCommandOutput> {
    return deserializeAws_restXmlSimpleScalarPropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
